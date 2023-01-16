import { useContext } from "react"
import "./CartWidget.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"

export const CartWidget = () => {
  const { cart } = useContext(CartContext)
  return (
    <div className="container-cart">
      < Link to="cart" >
      <AiOutlineShoppingCart
        style={{
          color: "blue",
          fontSize:"5rem",
          border : "solid 2px",
          borderColor:"black",
          height: "30px",
          width : "30px",
        }}
      />
        <div className="bubble-counter">
          <span style={{color: "black"}}>{cart.length}</span>
        </div>
      </Link>
    </div>
  );
};
