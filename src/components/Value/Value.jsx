import React from "react";

// import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

import "./Value.css";

import { IoIosArrowDropdownCircle } from "react-icons/io";

import data from "../../utils/accordion.jsx";

const Value = () => {
  console.log(data);
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="/value.png" alt="" />
          </div>
        </div>

        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we give to you</span>
          <span className="secondaryText">
            We always ready to help to providing good services in minimal
            income....
            <br />
            We believe in good balance can make your life better..
          </span>

          <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map((item, i) => {
              return (
                <AccordionItem className="accordionItem" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordion-btn">
                      <div className="icon">{item.icon}</div>

                      <span className="primaryText">{item.heading}</span>

                      <div className="drop-down-icon"></div>

                      <div className="icon">
                        <IoIosArrowDropdownCircle />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
