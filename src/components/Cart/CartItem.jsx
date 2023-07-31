import { useContext } from "react";
import { Context } from "../../contexts/CartContext/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(Context);
  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <h2>
          {item.title} - Cantidad: {item.quantity} - Precio: ${item.price}
        </h2>
        <button
          className="text-white  bg-indigo-400 hover:bg-indigo-700 text-base rounded-full py-1 px-3 mt-4 m-5"
          onClick={handleRemove}
        >
          Borrar
        </button>
      </div>
    </>
  );
};

export default CartItem;
