import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Context } from "../../contexts/CartContext/CartContext";
import CartItem from "./CartItem.jsx";

const Cart = () => {
  const { cart, clear, total } = useContext(Context);
  const [id, setId] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [order, setOrder] = useState({
    buyer: { name: "", phone: "", email: "" },
    items: [{}],
    total: totalPrice,
  });

  useEffect(() => {
    setTotalPrice(total());
  }, [cart]);

  const changeHandler = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
  };

  const submitOrder = (e) => {
    e.preventDefault();
    const newOrder = { buyer: form, items: cart, total: totalPrice };
    setOrder(newOrder);
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => {
      setId(id);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Your purchase ID is \n ${id}`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <>
      {cart.length > 0 ? (
        <>
          <h1 className="text-indigo-700">Carrito</h1>
          <form action="">
            <h2>Datos del comprador</h2>
            <div className="m-5 flex justify-center">
              <div className="m-5">
                <label htmlFor="name" className="text-indigo-700 text-xl">
                  Nombre:
                </label>
                <input
                  name="name"
                  type="text"
                  className="mx-2 text-xl bg-indigo-200 rounded"
                  onChange={changeHandler}
                  value={form.name}
                />
              </div>
              <div className="m-5">
                <label htmlFor="phone" className="text-indigo-700 text-xl">
                  Teléfono:
                </label>
                <input
                  name="phone"
                  type="number"
                  className="mx-2 text-xl bg-indigo-200 rounded"
                  onChange={changeHandler}
                  value={form.phone}
                />
              </div>
              <div className="m-5">
                <label htmlFor="email" className="text-indigo-700 text-xl">
                  Email:
                </label>
                <input
                  name="email"
                  type="email"
                  className="mx-2 text-xl bg-indigo-200 rounded"
                  onChange={changeHandler}
                  value={form.email}
                />
              </div>
            </div>
            {cart.map((element) => (
              <CartItem item={element} />
            ))}
            <h2 className="text-indigo-700">
              Precio Total: <span className="font-bold">${totalPrice}</span>
            </h2>
            <button
              className="text-white  bg-red-400 hover:bg-red-700 text-base rounded-full py-1 px-3 mt-5 m-2"
              onClick={clear}
            >
              Vaciar Carrito
            </button>

            <button
              className="text-white  bg-emerald-400 hover:bg-emerald-700 text-base rounded-full py-1 px-3 mt-5 m-2"
              onClick={submitOrder}
            >
              Comprar Carrito
            </button>
          </form>
        </>
      ) : (
        <h2 className="font-bold">El carrito está vacío</h2>
      )}
    </>
  );
};

export default Cart;
