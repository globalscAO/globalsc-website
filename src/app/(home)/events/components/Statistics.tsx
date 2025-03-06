import React from "react";
import CountUp from "react-countup";

const Statistics: React.FC = () => {
  const datas = [
    { numbers: 10, title: "Eventos" },
    { numbers: 30, title: "Empresas" },
    { numbers: 500, title: "Participantes" },
    { numbers: 50, title: "Parceiros" },
  ];

  return (
    <section className="bg-[#090031] h-28 flex justify-center lg:px-24 lg:py-5 max-lg:p-6">
      <div className="max-w-7xl w-full  flex max-lg:flex-col justify-between text-white items-center">
        <h1 className="font-bold text-2xl max-lg:text-sm">
          ESTÁTISTICA DOS EVENTOS
        </h1>

        <div className="flex justify-between max-lg:justify-around gap-6 max-lg:gap-0 items-center w-1/3 max-lg:w-full">
          {datas.map((stats, index) => (
            <div
              key={index}
              className="flex flex-col items-center">
              <h2 className="font-bold text-2xl max-lg:text-sm">
                +
                <CountUp
                  end={stats.numbers}
                  duration={5}
                />
              </h2>
              <p className="text-xs">{stats.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
