import React from "react";
import "./Nav.css";

const Nav = props => {
  return(
    <nav className="navbar text-white bg-red">
      <a className="navbar-brand" href="/"><img src="img/P5.png" alt="p5" className="nav-img"/></a>
      <div className="nav-text stylized-text">Arcana Clicker</div>
      {props.children}
    </nav>
  );
};

export default Nav;