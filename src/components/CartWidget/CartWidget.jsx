import "./CartWidget.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";


export const CartWidget = () => {
  return (
    <div className="container-cart">
      < Link to="/proyectoCarrito" >
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
      <div className="contador-carrito"> 
        <p>5</p>
      </div>
      </Link>
    </div>
  );
};
