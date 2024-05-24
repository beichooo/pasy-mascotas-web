import ActionBtns from "@/components/ActionBtns";
import Header from "@/components/Header";
import ItemCard from "@/components/ItemCard";
import { connectDB } from "@/libs/mongodb";
import Pet from "@/models/Pet";

async function loadResults() {
  connectDB();
  const pets = await Pet.find();
  console.log(pets);

  return pets;
}

async function ResultsPage() {
  const pets = await loadResults();
  return (
    <>
      <Header />
      <div>
        <h1 className=" text-center font-fredoka text-3xl text-pasy-brown-text font-medium">
          Variable title
        </h1>
        <div className="grid grid-cols-2 max-w-[500px] mx-auto gap-4 px-4">
          {pets.map((pet) => (
            <ItemCard item={pet} key={pet._id} />
          ))}
        </div>

        <div className="flex p-4 max-w-60 mx-auto">
          <ActionBtns
            text="VOLVER A BUSCAR"
            type="button"
            variant="secondary"
          />
        </div>
      </div>
    </>
  );
}
export default ResultsPage;
