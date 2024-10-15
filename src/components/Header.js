import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <h1>{props.chan}</h1>
      </Link>
      <p>{props.desc}</p>
    </div>
  );
}

export default Header;
