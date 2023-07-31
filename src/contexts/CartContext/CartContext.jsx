import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const Context = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  /**
   * * addItem()
   * If the item is already in the cart, add the quantity to the existing quantity, otherwise add the item to the cart.
   * @param {object} item
   * @param {number} quantity
   */
  const addItem = (item, quantity) => {
    const before = isInCart(item.id);
    if (before) {
      const arr = cart.filter((e) => e.id !== item.id);
      item.quantity = quantity + before.quantity;
      arr.push(item);
      setCart(arr);
    } else {
      item.quantity = quantity;
      setCart([...cart, item]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `You add ${quantity} Items to Cart`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  /**
   * * removeItem()
   * Remove the item from the cart if the item's order is not equal to the itemId.
   * @param {number} itemId
   */
  const removeItem = (itemId) => {
    setCart(cart.filter((e) => e.id !== itemId));
  };

  /**
   * * clear()
   * The clear function is a function that sets the cart to an empty array.
   */
  const clear = () => {
    if (cart !== 0) {
      Swal.fire({
        title: "Estás seguro?",
        text: "Esta acción no podrá ser revertida!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, vaciar carrito!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Vaciado!",
            text: "El carrito fue vaciado con éxito!",
            icon: "success",
            confirmButtonColor: "#3085d6",
          });
          setCart([]);
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "¡El carrito está vacío!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  /**
   * * isInCart()
   * is a function that takes an itemId as an argument and returns a boolean value based on whether or not the itemId is found in the cart array.
   * @returns The function isInCart is returning a boolean value.
   * @param {number} itemId
   */
  const isInCart = (itemId) => {
    return cart.find((e) => e.id === itemId);
  };

  /**
   * * total()
   * The total function iterates through the cart array and adds the price of each item multiplied by the quantity of each item to the total variable.
   * @returns The total price of all items in the cart.
   */
  const total = () => {
    let tot = 0;
    cart.forEach((item) => {
      tot = tot + item.price * item.quantity;
    });
    return tot;
  };

  return (
    <Context.Provider value={{ addItem, cart, clear, removeItem, total }}>
      {children}
    </Context.Provider>
  );
};

export default CartContext;
