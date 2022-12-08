import "./NavBar.css";

import {Link} from "react-router-dom"

import { CartWidget } from "../CartWidget/CartWidget";

const NavBar = () => {

  const nombre = "Todas"
  return (
    <div className="navbar-container">
      <div className="container-logo">
        <Link to="/">
        <img
          className="logo-navbar"
          src="https://i.postimg.cc/yN4v1rMz/dush-logo-Mesa-de-trabajo-1.png"
          alt="logoDushArt"
        />
        </Link>
      </div>
      <ul className="navbar">
      <Link className="navbar-item" to="/" >Todos los productos</Link>
        <Link className="navbar-item" to="/category/Cuadros" >Cuadros</Link>
        <Link className="navbar-item" to="/category/Camperas" >Camperas</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
