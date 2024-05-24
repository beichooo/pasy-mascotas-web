interface Item {
  id: number;
  name: string;
  price: number;
  photo: string;
}

interface ItemListProps {
  items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className=" flex p-4 justify-center align-middle w-screen">
      <ul className="grid grid-cols-2 gap-2 max-w-[400px]">
        {items.map((item) => (
          <li key={item.id}>
            <img
              src={item.photo}
              alt="pet photo"
              className="aspect-square object-cover rounded-t-xl"
            />
            <div className="font-rubik bg-pasy-brown-text text-white flex flex-col py-1 rounded-b-xl">
              <p className="text-lg text-center font-medium">{item.name}</p>
              <p className="text-center text-base font-light">${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
