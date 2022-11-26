import "./NavBar.css";


import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = () => {

  return (
    <div className="navbar-container">
      <div className="container-logo">
        <img
          className="logo-navbar"
          src="https://i.postimg.cc/yN4v1rMz/dush-logo-Mesa-de-trabajo-1.png"
          alt=""
        />
      </div>
      <ul className="navbar">
        <li className="navbar-item">Cuadros</li>
        <li className="navbar-item">Camperas</li>
        <li className="navbar-item">Contacto</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
