import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../contexts/CartContext/CartContext";

const Cartwidget = () => {
	const { cart } = useContext(Context);
	return (
		<>
			<Link to={"/cart"}>
				<div className="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="32"
						height="32"
					>
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
							fill="rgba(80,70,229,1)"
						/>
					</svg>
					<span className="text-xl text-indigo-500">{cart.length}</span>
				</div>
			</Link>
		</>
	);
};
export default Cartwidget;
