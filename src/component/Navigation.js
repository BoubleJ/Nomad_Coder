import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="Nav">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
