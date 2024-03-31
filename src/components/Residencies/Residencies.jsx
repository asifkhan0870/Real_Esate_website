import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import data from "../../utils/slider.json";
import "./Residencies.css";
import {sliderSettings} from "../../utils/common.js"

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">   Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings} >
          {data.map((card, indx) => (
            <SwiperSlide key={indx}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="" />
                <span className="secondaryText r-price">
                  <span className="orangeText">$</span>
                  <span className="secondaryText">{card.price}</span>
                </span>

                <span >{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Residencies;
