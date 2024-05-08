import ActionBtns from "@/components/ActionBtns";
import Header from "@/components/Header";
import ItemList from "@/components/ItemList";

function ResultsPage() {
  return (
    <>
      <Header />
      <div>
        <h1 className=" text-center font-fredoka text-3xl text-pasy-brown-text font-medium">
          Variable title
        </h1>
        <ItemList />
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
