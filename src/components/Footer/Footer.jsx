import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="padding innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" />
          <span className="secondaryText">
            Our vision to make all people happy <br />
            The best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">1223 Aligarh Maulna Azad Amu</span>
          <div className="flexCenter menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
