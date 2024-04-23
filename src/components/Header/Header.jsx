import React, { useState } from "react";
import "./Header.css";
import { IoMdMenu } from "react-icons/io";

import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 770) {
      return { right: !menuOpen && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="" />

        <OutsideClickHandler
          onOutsideClick={() => {
            setmenuOpen(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyle(menuOpen)}>
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setmenuOpen((prev) => !prev)}>
          <IoMdMenu size={25} />
        </div>
      </div>
    </section>
  );
};

export default Header;
