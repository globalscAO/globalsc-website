"use client"

import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select, { SingleValue, StylesConfig } from "react-select";
import countries from "world-countries";
import { ToastContainer, toast } from "react-toastify";
import BannerLayout from "@/app/ui/Banner/BannerLayout";
import { api } from "@/app/api/config";

type RegistrationFormInputs = {
  fullName: string;
  docId: string;
  phoneNumber: string;
  email: string;
  province: string;
  bornDate: string;
  country: string;
  modality: string;
  address: string;
  termsConditions: string;
  course: string;
};

interface CountryOption {
  value: string;
  label: string;
}

const countryOptions: CountryOption[] = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
}));

const customStyles: StylesConfig<CountryOption, false> = {
  control: (provided) => ({
    ...provided,
    minHeight: "45px",
    outline: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#007BFF"
      : state.isFocused
      ? "#E9ECEF"
      : "white",
    color: state.isSelected ? "white" : "#495057",
    padding: "10px 15px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#495057",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#6C757D",
  }),
};

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<RegistrationFormInputs>();

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<RegistrationFormInputs> = async (data) => {
    try {
      setLoading(true);

      const response = await api.post("/academy/registration", {
        address: data.address,
        bornDate: data.bornDate,
        country: data.country,
        course: data.course,
        docId: data.docId,
        email: data.email,
        fullName: data.fullName,
        modality: data.modality,
        phoneNumber: data.phoneNumber,
        province: data.province,
      });

      if (response.status === 200) {
        toast.success("Inscrição feita com successo");
        reset();
      }
    } catch (error: any) {
      if (error.response?.status === 500) {
        toast.error("Erro ao fazer inscrição. Tente novamente.");
      } else {
        toast.error("Erro ao fazer inscrição. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white flex items-center flex-col">
      <ToastContainer />
      <BannerLayout
        title={"Inscrição"}
        description={"Garanta sua vaga e aprenda com os melhores."}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:p-8 flex flex-col items-center max-w-7xl w-full">
        <div className="bg-[#F2F2F2] w-full p-8 rounded-2xl grid grid-cols-2 gap-4">
          <div className="col-span-2 text-center flex flex-col text-[#11005a]">
            <h2 className="text-3xl font-semibold max-lg:text-base">
              Formulário de Inscrição
            </h2>

            <p className="text-sm max-lg:text-xs">
              Preencha o formulário para se inscrever.
            </p>
          </div>

          <div className="col-span-2 flex flex-col gap-2">
            <label className="text-sm text-[#11005a]">Nome Completo</label>
            <input
              className="px-4 py-2 outline-none rounded-lg bg-white"
              {...register("fullName", {
                required: true,
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\s'`-]+$/,
                  message: "Insira um nome válido",
                },
              })}
              placeholder="Insira o seu nome completo"
            />
            {errors.fullName && (
              <p className="text-xs text-red-500">Este campo é obrigatório</p>
            )}
          </div>

          <div className="col-span-1 max-lg:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-[#11005a]">Data de nascimento</label>
            <input
              className="px-4 py-2 outline-none rounded-lg bg-white"
              {...register("bornDate", { required: true })}
              placeholder="Insira o seu data de nascimento"
              type="date"
            />
            {errors.bornDate && (
              <p className="text-xs text-red-500">
                Data de nascimento é obrigatória
              </p>
            )}
          </div>

          <div className="col-span-1 max-lg:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-[#11005a]">
              Documento de Identificação
            </label>
            <input
              className="px-4 py-2 outline-none rounded-lg bg-white"
              {...register("docId", { required: true })}
              placeholder="Insira o seu documento de identificação"
            />
            {errors.docId && (
              <p className="text-xs text-red-500">
                Documento de identificação é obrigatório
              </p>
            )}
          </div>

          <div className="col-span-1 max-lg:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-[#11005a]">Email</label>
            <input
              className="px-4 py-2 outline-none rounded-lg bg-white"
              type="email"
              placeholder="Insira o seu email"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: "Insira um email válido",
                },
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="col-span-1 max-lg:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-[#11005a]">Telefone</label>
            <input
              className="px-4 py-2 outline-none rounded-lg bg-white"
              type="tel"
              placeholder="Insira o número de telefone"
              {...register("phoneNumber", {
                required: "Número de telefone é obrigatório",
                pattern: {
                  value:
                    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{3}[-.\s]?\d{3,4}$/,
                  message: "Insira um número de telefone válido",
                },
              })}
            />
            {errors.phoneNumber && (
              <p className="text-xs text-red-500">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="col-span-1 max-lg:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-[#11005a]">País</label>
            <Controller
              control={control}
              {...register("country", { required: "País é obrigatório" })}
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  options={countryOptions}
                  value={countryOptions.find(
                    (option) => option.value === field.value
                  )}
                  onChange={(selectedOption) =>
                    field.onChange(
                      (selectedOption as SingleValue<CountryOption>)?.value
                    )
                  }
                  placeholder="Selecione um país"
                  styles={customStyles}
                />
              )}
              rules={{
                required: "Seleção de país é obrigatória",
              }}
            />

            {errors.country && (
              <p className="text-xs text-red-500">País é obrigatório</p>
            )}
          </div>

          <div className="col-span-1 max-lg:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-[#11005a]">Província</label>
            <input
              className="px-4 py-2 outline-none rounded-lg bg-white"
              {...register("province", { required: true })}
              placeholder="Insira a sua província"
            />
            {errors.province && (
              <p className="text-xs text-red-500">Província é obrigatório</p>
            )}
          </div>

          <div className="col-span-2 flex flex-col gap-2">
            <label className="text-sm text-[#11005a]">Endereço</label>
            <input
              className="px-4 py-2 outline-none rounded-lg bg-white"
              {...register("address", { required: true })}
              placeholder="Insira a sua endereço"
            />
            {errors.address && (
              <p className="text-xs text-red-500">Endereço é obrigatório</p>
            )}
          </div>

          <div className="col-span-2 flex flex-col gap-2">
            <label className="text-sm text-[#11005a]">Curso</label>
            <div className="px-4 py-2 outline-none rounded-lg bg-white">
              <select
                className="w-full outline-none text-[#11005a] bg-white"
                {...register("course", { required: true })}>
                <option value="">Selecione o curso</option>
                <option value="Programação de Gestão Estratégica">
                  Programação de Gestão Estratégica{" "}
                </option>
                <option value="Programa Executivo sobre Finança Corporativa ">
                  Programa Executivo sobre Finança Corporativa
                </option>
                <option value="Liderança Executiva">Liderança Executiva</option>
                <option value="Inteligência Emocional e Empatia">
                  Inteligência Emocional e Empatia
                </option>
                <option value="Coaching e Mentoria">Coaching e Mentoria</option>
                <option value="Higiene, Segurança e Saúde no Trabalho">
                  Higiene, Segurança e Saúde no Trabalho
                </option>
                <option value="Gestão de Pessoas para Líderes Emergentes">
                  Gestão de Pessoas para Líderes Emergentes
                </option>
                <option value="Corporate Governance">
                  Corporate Governance
                </option>
                <option value="Masterclass Avançada - Liderando Equipes Híbridas">
                  Masterclass Avançada - Liderando Equipes Híbridas
                </option>
                <option value="Materclass Avançada- Gestão Estratégica de Marketing">
                  Materclass Avançada- Gestão Estratégica de Marketing
                </option>
                <option value="Liderar a Transformação Digital e IA">
                  Liderar a Transformação Digital e IA
                </option>
              </select>
            </div>
            {errors.course && (
              <p className="text-xs text-red-500">O curso é obrigatório</p>
            )}
          </div>

          <div className="col-span-2 flex flex-col gap-2">
            <label className="text-sm text-[#11005a]">Modalidade</label>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <input
                  id="presencial"
                  value="presencial"
                  className="px-4 py-2 outline-none rounded-lg bg-white w-4 h-4"
                  {...register("modality", { required: true })}
                  type="radio"
                />
                <label htmlFor="presencial">Presencial</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="online"
                  value="online"
                  className="px-4 py-2 outline-none rounded-lg bg-white w-4 h-4"
                  {...register("modality", { required: true })}
                  type="radio"
                />
                <label htmlFor="online">Online</label>
              </div>
            </div>
            {errors.modality && (
              <p className="text-xs text-red-500">A modalidade é obrigatória</p>
            )}
          </div>

          <div className="col-span-2 flex flex-col gap-2">
            <div className="flex gap-2 items-center w-full">
              <input
                className="px-4 py-2 outline-none rounded-lg bg-white"
                {...register("termsConditions", { required: true })}
                placeholder="Insira a sua endereço"
                type="checkbox"
              />
              <label
                className="text-sm text-[#11005a] w-full"
                htmlFor="termsConditions">
                Sim, eu concordo com as{" "}
                <span className="font-medium">Políticas de Privacidade</span> e{" "}
                <span className="font-medium">Termos e Condições</span>.
              </label>
            </div>
            {errors.termsConditions && (
              <p className="text-xs text-red-500">
                Aceite os termos e condições para prosseguir é obrigatório
              </p>
            )}
          </div>

          <button
            type="submit"
            className="col-span-2 bg-[#FF9800] w-full rounded-lg px-4 py-2 text-white hover:border border-[#ff9800] hover:bg-white hover:text-[#ff9800] h-10 transition-colors duration-200 mt-4">
            {loading ? "Aguarde..." : "Fazer inscrição"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegistrationForm;
