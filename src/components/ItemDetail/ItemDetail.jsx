import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";
import Title from "../Title/Title";
import { Context } from "../../contexts/CartContext/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(Context);
  const [quantity, setQuantity] = useState();

  /**
   * * onAdd()
   * OnAdd is a function that takes a parameter called quantityToAdd, and when called, it calls the addItem function, passing in the item and quantityToAdd parameters, and then sets the quantity to the quantityToAdd parameter.
   */
  const onAdd = (quantityToAdd) => {
    addItem(item, quantityToAdd);
    setQuantity(quantityToAdd);
  };

  return (
    <>
      <Title txt={`${item.title}`} color="text-indigo-400" />
      <div className="flex justify-center">
        <div className="m-4 items-end border-8 border-solid rounded-md p-4 border-indigo-200 w-80">
          <img
            src={item.image}
            alt={item.title}
            className="object-center object-cover "
          />
        </div>
        <div className="mt-4 flex flex-col">
          <h1 className="text-indigo-500">${item.price}</h1>
          <h3 className="text-indigo-300">Stock: {item.stock}</h3>
          <ItemCounter stock={9} initial={1} onAdd={onAdd} />
          <div className="flex justify-between m-3">
            <Link to={"/"}>
              <button className="text-white  bg-indigo-400 hover:bg-indigo-700 text-base rounded-full py-1 px-3 m-2">
                Seguir comprando
              </button>
            </Link>
            <Link to={"/cart"}>
              <button className="text-white  bg-indigo-400 hover:bg-indigo-700 text-base rounded-full py-1 px-3 m-2">
                Finalizar compra
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
