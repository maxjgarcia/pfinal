import { Popover } from "@headlessui/react";
import Cartwidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../contexts/CartContext/CartContext";

export default function NavBar() {
  const { cart } = useContext(Context);
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to={"/"}>
              <p>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </p>
            </Link>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link to={"/category/platos"}>
              <p className="text-base font-medium text-gray-500 hover:text-gray-900">
                Platos
              </p>
            </Link>
            <Link to={"/category/vasos"}>
              <p className="text-base font-medium text-gray-500 hover:text-gray-900">
                Vasos
              </p>
            </Link>
            <Link to={"/category/cubiertos"}>
              <p className="text-base font-medium text-gray-500 hover:text-gray-900">
                Cubiertos
              </p>
            </Link>
            <Link to={"/donde-estamos"}>
              <p className="text-base font-medium text-gray-500 hover:text-gray-900">
                Donde estamos
              </p>
            </Link>
            <Link to={"/contacto"}>
              <p className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contacto
              </p>
            </Link>
            {cart.length !== 0 ? <Cartwidget /> : null}
          </Popover.Group>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <p className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </p>
            <p className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Sign up
            </p>
          </div>
        </div>
      </div>
    </Popover>
  );
}
