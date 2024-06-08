"use client";
import Header from "@/components/Header";
import ActionBtns from "@/components/ActionBtns";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Searcher() {
  const [breedTerm, setBreedTerm] = useState("");
  const [genderTerm, setGenderTerm] = useState("");
  const [sizeTerm, setSizeTerm] = useState("");
  const router = useRouter();
  console.log(breedTerm);
  console.log(genderTerm);
  console.log(sizeTerm);

  const handleSubmit = () => {
    router.push(
      `searcher/results?breedTerm=${breedTerm}&genderTerm=${genderTerm}&sizeTerm=${sizeTerm}`
    );
  };

  return (
    <>
      <Header />
      <h1 className=" text-center font-fredoka text-3xl text-pasy-brown-text font-medium">
        Buscador de mascotas
      </h1>

      <div className="flex flex-col font-fredoka max-w-[500px] mx-auto p-6 gap-2">
        <div className="rounded-2xl px-4 py-2">
          <legend className="font-medium text-xl text-pasy-brown-text hidden">
            Especie
          </legend>
          <div className="flex flex-row mx-auto w-fit gap-10">
            <label
              htmlFor="pet-specie"
              className="flex flex-col text-black font-normal text-2xl"
            >
              <input
                className="p-3 text-pasy-brown-text bg-white checked:bg-pasy-brown-text self-center"
                type="radio"
                name="pet-specie"
                id="Perro"
                required
                onChange={(e) => {
                  setBreedTerm(e.target.id);
                }}
              />
              Perro
            </label>
            <label
              htmlFor="pet-specie"
              className="flex flex-col text-black font-normal text-2xl"
            >
              <input
                className="p-3 text-pasy-brown-text bg-white checked:bg-pasy-brown-text self-center"
                type="radio"
                name="pet-specie"
                id="Gato"
                onChange={(e) => {
                  setBreedTerm(e.target.id);
                }}
              />
              Gato
            </label>
          </div>
        </div>

        <div className="rounded-2xl bg-pasy-brown-bg-second px-4 py-2">
          <legend className="font-medium text-xl text-pasy-brown-text">
            Que sea...
          </legend>
          <div className="flex flex-row mx-auto w-fit gap-10">
            <label
              htmlFor="pet-gender"
              className="flex flex-col text-black font-normal"
            >
              <input
                className="p-3 text-pasy-brown-text bg-white checked:bg-pasy-brown-text self-center"
                type="radio"
                name="pet-gender"
                id="Macho"
                required
                onChange={(e) => {
                  setGenderTerm(e.target.id);
                }}
              />
              Macho
            </label>
            <label
              htmlFor="pet-gender"
              className="flex flex-col text-black font-normal"
            >
              <input
                className="p-3 text-pasy-brown-text bg-white checked:bg-pasy-brown-text self-center"
                type="radio"
                name="pet-gender"
                id="Hembra"
                onChange={(e) => {
                  setGenderTerm(e.target.id);
                }}
              />
              Hembra
            </label>
          </div>
        </div>

        <div className="rounded-2xl bg-pasy-brown-bg-second px-4 py-2">
          <legend className="font-medium text-xl text-pasy-brown-text">
            De tamaño
          </legend>
          <div className="flex flex-row mx-auto w-fit gap-10">
            <label
              htmlFor="pet-size"
              className="flex flex-col text-black font-normal"
            >
              <input
                className="p-3 text-pasy-brown-text bg-white checked:bg-pasy-brown-text self-center"
                type="radio"
                name="pet-size"
                id="Pequeño"
                required
                onChange={(e) => {
                  setSizeTerm(e.target.id);
                }}
              />
              Pequeño
            </label>
            <label
              htmlFor="pet-size"
              className="flex flex-col text-black font-normal"
            >
              <input
                className="p-3 text-pasy-brown-text bg-white checked:bg-pasy-brown-text self-center"
                type="radio"
                name="pet-size"
                id="Mediano"
                onChange={(e) => {
                  setSizeTerm(e.target.id);
                }}
              />
              Mediano
            </label>
            <label
              htmlFor="pet-size"
              className="flex flex-col text-black font-normal"
            >
              <input
                className="p-3 text-pasy-brown-text bg-white checked:bg-pasy-brown-text self-center"
                type="radio"
                name="pet-size"
                id="Grande"
                onChange={(e) => {
                  setSizeTerm(e.target.id);
                }}
              />
              Grande
            </label>
          </div>
        </div>
        <div className="flex flex-row gap-2 mt-4">
          <ActionBtns text="VER TODOS" type="button" variant="secondary" />
          <ActionBtns text="BUSCAR" type="submit" variant="primary" />
          <button onClick={handleSubmit}> Buscar test</button>
        </div>
      </div>
    </>
  );
}

export default Searcher;
