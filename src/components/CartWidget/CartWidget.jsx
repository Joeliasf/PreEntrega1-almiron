import "./CartWidget.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
export const CartWidget = () => {
  return (
    <div className="container-cart">
      <AiOutlineShoppingCart
        style={{
          color: "blue",
          fontSize:"5rem",
          border : "solid 2px",
          borderColor:"black"
        }}
      />
    </div>
  );
};
