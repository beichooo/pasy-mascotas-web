interface Item {
  _id: number;
  name: string;
  gender: string;
  size: string;
  address: string;
  health: string;
  nature: string;
  whatsapp: number;
  owner: string;
}

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className=" flex flex-col justify-center align-middle w-full">
      <img
        src={
          "https://img.icons8.com/?size=100&id=123964&format=png&color=000000"
        }
        alt="pet photo"
        className="aspect-square object-cover rounded-t-xl"
      />
      <div className="font-rubik bg-pasy-brown-text text-white flex flex-col py-1 rounded-b-xl">
        <p className="text-lg text-center font-medium">{item.name}</p>
        <div className="flex align-middle justify-center gap-2">
          <p className="text-center text-sm font-light">{item.size}</p>
          <p className="text-center text-sm font-light">{item.health}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
