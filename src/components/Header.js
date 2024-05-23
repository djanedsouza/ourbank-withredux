import React from "react";
import Menu from "./Menu";

function Header() {
  return (
    <div className="header-container">
      <img src="/header-logo.png" height="auto" width="100px" />
      <Menu />
    </div>
  );
}

export default Header;
