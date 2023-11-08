import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <header className="topbar">
      <Link to="/todo">
        <h1 className="logo">TuZu</h1>
      </Link>
      <Link to="/review">
        <h2 className="logo">review</h2>
      </Link>
      <Link to="/complete">
        <h2 className="logo">complete</h2>
      </Link>
    </header>
  );
};

export default Topbar;
