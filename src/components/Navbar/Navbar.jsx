import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import logo from "../../assets/images/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const { count } = useContext(Context);

  return (
    <nav>
      <img src={logo} alt="logo" />
      <div>
        <span>SCORE</span>
        <span>{count}</span>
      </div>
    </nav>
  );
};

export default Navbar;
