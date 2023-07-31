import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Title from "./components/Title/Title";
import ContactFormContainer from "./container/ContactFormContainer/ContactFormContainer";
import WhereContainer from "./container/WhereContainer/WhereContainer";
import ItemDetailContainer from "./container/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./container/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import CartContext from "./contexts/CartContext/CartContext";

const App = () => {
  return (
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Title txt="Tienda de Alegrías" color=" text-indigo-700" />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer color="#5046e5" greeting="Bienvenido" />
              }
            />
            <Route
              path="/category/:idCategory"
              element={
                <ItemListContainer color="#5046e5" greeting="Bienvenido" />
              }
            />
            <Route
              path="/detail/:idCategory/:idItem"
              element={<ItemDetailContainer />}
            />
            <Route path="/donde-estamos" element={<WhereContainer />} />
            <Route path="/contacto" element={<ContactFormContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </div>
  );
};

export default App;
