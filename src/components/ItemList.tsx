import React from "react";

interface Item {
  id: number;
  name: string;
  price: number;
  photo: string;
}

const itemList: Item[] = [
  {
    id: 1,
    name: "Item 1",
    price: 10,
    photo:
      "https://img.freepik.com/free-vector/gradient-n-logo-template_23-2149377854.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=ais",
  },
  {
    id: 2,
    name: "Item 2",
    price: 20,
    photo:
      "https://img.freepik.com/free-vector/gradient-n-logo-template_23-2149377854.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=ais",
  },
  {
    id: 3,
    name: "Item 3",
    price: 30,
    photo:
      "https://img.freepik.com/free-vector/gradient-n-logo-template_23-2149377854.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=ais",
  },
];

const ItemList: React.FC = () => {
  return (
    <div className=" flex p-4 justify-center align-middle w-screen">
      <ul className="grid grid-cols-2 gap-2 max-w-[400px]">
        {itemList.map((item) => (
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
