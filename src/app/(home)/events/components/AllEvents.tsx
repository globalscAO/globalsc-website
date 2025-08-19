"use client";

import React, { useState, useEffect, useMemo } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { Event, eventsData } from "../images/events";
import Fuse from "fuse.js";
import { normalizeString } from "../../../utils/normalizeString";
import PastEventCardVertical from "@/app/ui/PastEventCardVertical";

const AllEvents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(
    "maisRecente"
  );
  const [suggestions, setSuggestions] = useState<Event[]>([]);

  const fuse = useMemo(() => {
    const normalizedData = eventsData.map((event) => ({
      ...event,
      title: normalizeString(event.title),
    }));

    return new Fuse(normalizedData, {
      keys: ["title"],
      threshold: 0.4,
    });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const normalizedTerm = normalizeString(value);
      const results = fuse
        .search(normalizedTerm)
        .map((result: { item: any }) => result.item);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const filterEvents = (term: string, filter: string | null) => {
    const filtered = [...(term ? suggestions : eventsData)];

    if (filter === "maisRecente") {
      filtered.sort((a, b) => b.date.getTime() - a.date.getTime());
    } else if (filter === "maisAntigo") {
      filtered.sort((a, b) => a.date.getTime() - b.date.getTime());
    } else if (filter === "aZ") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredEvents(filtered);
  };

  useEffect(() => {
    filterEvents(searchTerm, selectedFilter);
  }, [searchTerm, selectedFilter, suggestions]);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setIsFilterOpen(false);
  };

  return (
    <div className="px-24 py-12 max-lg:px-5 max-lg:py-7 flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-10 max-w-7xl w-full">
        <div className="flex justify-between gap-10 h-9 max-lg:gap-2">
          <div className="w-4/5 bg-[#e7e7e790] rounded-md py-1 px-5 flex justify-between items-center gap-2">
            <input
              type="text"
              id="search"
              className="outline-none w-full bg-transparent"
              placeholder="Pesquisar evento"
              value={searchTerm}
              onChange={handleSearch}
            />
            <IoIosSearch className="text-[#666666]" />
          </div>

          <div className="relative w-1/5 ">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full h-full bg-[#e7e7e790] rounded-md flex justify-center items-center gap-1 group hover:text-white hover:bg-[#11005A]">
              <CiFilter className="group-hover:text-white" />
              <span className="max-lg:hidden">Filtrar</span>
            </button>

            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                <ul>
                  <li
                    onClick={() => handleFilterChange("maisRecente")}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Mais Recente
                  </li>
                  <li
                    onClick={() => handleFilterChange("maisAntigo")}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Mais Antigo
                  </li>
                  <li
                    onClick={() => handleFilterChange("aZ")}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    De A-Z
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-8 w-full">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              
                <PastEventCardVertical
                  key={event.id}
                  imgSrc={event.imgSrc}
                  mediaSrc={event.mediaSrc}
                  title={event.title}
                  description={event.description}
                />
             
            ))
          ) : (
            <div className="col-span-4 text-center text-gray-500">
              Nenhuma correspondência encontrada
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
