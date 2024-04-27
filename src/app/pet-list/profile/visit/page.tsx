import Image from "next/image";
import iconWsp from "@/public/icon-whats-app.svg";
import iconMaps from "@/public/icon-gmaps.svg";
import ActionBtns from "@/app/components/ActionBtns";
function VisitPet() {
  return (
    <>
      <section className="flex flex-col max-w-[500px] items-center mx-auto mt-6">
        <h1 className="font-fredoka text-3xl font-medium text-pasy-brown-text">
          Filogmeno espera tu visita
        </h1>
        <span className="text-4xl text-pasy-brown-text mb-8">♥️</span>
        <img
          src="https://i.etsystatic.com/28380725/r/il/905b43/3629480766/il_570xN.3629480766_5rzz.jpg"
          alt="a dog with a flag"
          className="aspect-square object-cover rounded-xl mx-auto w-[150px]"
        />
      </section>
      <section className="flex flex-col items-center max-w-[300px] mx-auto gap-3 mt-4">
        <div className="flex gap-3 items-center border-pasy-brown-text border-2 rounded-xl px-4 py-2 font-fredoka font-medium text-stone-500 text-2xl w-full">
          <Image src={iconWsp} alt="whatsapp icon" />
          Enviar mensaje
        </div>
        <div className="flex gap-3 items-center border-pasy-brown-text border-2 rounded-xl px-4 py-2 font-fredoka font-medium text-stone-500 text-2xl w-full">
          <Image src={iconMaps} alt="maps icon" />
          Ver mapa
        </div>
      </section>
      <section className="flex flex-col">
        <p className="font-fredoka text-center font-light text-base text-stone-600 mt-4 mb-2">
          Otra forma de ayudarnos
        </p>
        <div className="flex mx-auto w-full max-w-[500px] px-4">
          <ActionBtns
            text={"Compartir en redes"}
            type={"button"}
            variant={"primary"}
          />
        </div>
      </section>
    </>
  );
}
export default VisitPet;
