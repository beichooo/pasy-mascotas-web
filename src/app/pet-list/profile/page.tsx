import Header from "@/app/components/Header";
import InfoTags from "@/app/components/InfoTags";
import Image from "next/image";

import iconHealth from "@/public/icon-health.svg";
import iconMood from "@/public/icon-mood.svg";
import iconAddress from "@/public/icon-ref-address.svg";
import ActionBtns from "@/app/components/ActionBtns";

function Profile() {
  return (
    <>
      <Header />
      <section className="flex flex-col mx-auto max-w-[500px] p-4 gap-3">
        <img
          src="https://img.freepik.com/free-vector/gradient-n-logo-template_23-2149377854.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=ais"
          alt="photo from internet"
          className="aspect-square object-cover rounded-xl mx-auto"
        />
        <h1 className="font-rubik font-semibold text-3xl text-center">
          Nombre de la mascota
        </h1>
      </section>

      <section className="flex flex-col px-8 max-w-[500px] mx-auto">
        <InfoTags specie="Perro" gender="Macho" size="Grande" />
        <div className="p-4 border-stone-400 border-2 rounded-xl bg-[#FFF6EB] mt-2">
          <div className="flex flex-row items-center gap-4 ">
            <Image src={iconHealth} alt="health icon" />
            <p className="font-rubik font-medium text-lg bg-orange-500 text-white px-1 py-0 rounded-lg">
              EN TRATAMIENTO
            </p>
          </div>
          <div className="flex flex-row items-center gap-4 ">
            <Image src={iconMood} alt="health icon" />
            <p className="font-rubik font-medium text-lg bg-green-600 text-white px-1 py-0 rounded-lg">
              AMIGABLE
            </p>
          </div>
          <div className="flex flex-row items-center gap-4 ">
            <Image src={iconAddress} alt="health icon" />
            <p className="font-fredoka font-medium text-xl text-stone-500 px-1 py-0 rounded-lg">
              Villa Adela - El Alto
            </p>
          </div>
        </div>
        <div className="flex mt-2 mb-1">
          <ActionBtns
            text={"QUIERO CONOCERLO"}
            type={"button"}
            variant={"primary"}
          />
        </div>
        <div className="flex">
          <ActionBtns
            text={"COMPARTIR EN REDES"}
            type={"button"}
            variant={"secondary"}
          />
        </div>
      </section>
      <section className="max-w-[500px] mx-auto px-6 py-4">
        <h2 className="font-fredoka text-stone-600 text-xl font-medium">
          Más información
        </h2>
        <p className="font-rubik text-stone-600 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          doloremque autem maiores minus molestias explicabo veniam illo ea nam
          quibusdam adipisci delectus velit pariatur, dolores itaque cum
          repellat assumenda dolor.
        </p>
      </section>
    </>
  );
}
export default Profile;
