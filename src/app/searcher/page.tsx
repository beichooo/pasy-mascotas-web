import Header from "../components/Header";
import ActionBtns from "../components/ActionBtns";

const Searcher: React.FC = () => {
  return (
    <>
      <Header />
      <h1 className=" text-center font-fredoka text-3xl text-pasy-brown-text font-medium">
        Buscador de mascotas
      </h1>
      <div>
        <form className="flex flex-col font-fredoka max-w-[500px] mx-auto p-6 gap-2">
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
                  id="dog-specie"
                  required
                />
                Perrito
              </label>
              <label
                htmlFor="pet-specie"
                className="flex flex-col text-black font-normal text-2xl"
              >
                <input
                  className="p-3 text-pasy-brown-text bg-white checked:bg-pasy-brown-text self-center"
                  type="radio"
                  name="pet-specie"
                  id="cat-specie"
                />
                Gatito
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
                  id="male-pet"
                  required
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
                  id="female-pet"
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
                  type="radio"
                  name="pet-size"
                  id="pet-small"
                  className="p-3 text-pasy-brown-text bg-white checked:bg-pasy-brown-text self-center"
                />
                Pequeño
              </label>
              <label
                htmlFor="pet-size"
                className="flex flex-col text-black font-normal"
              >
                <input
                  type="radio"
                  name="pet-size"
                  id="pet-middle"
                  className="p-3 text-pasy-brown-text bg-white checked:bg-pasy-brown-text self-center"
                />
                Mediano
              </label>
              <label
                htmlFor="pet-size"
                className="flex flex-col text-black font-normal"
              >
                <input
                  type="radio"
                  name="pet-size"
                  id="pet-large"
                  className="p-3 text-pasy-brown-text bg-white checked:bg-pasy-brown-text self-center"
                />
                Grande
              </label>
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-4">
            <ActionBtns text="VER TODOS" type="button" variant="secondary" />
            <ActionBtns text="BUSCAR" type="submit" variant="primary" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Searcher;
