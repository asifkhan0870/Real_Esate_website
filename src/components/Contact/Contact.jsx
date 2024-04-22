import React from "react";
import "./Contact.css";
import { PiPhoneCallFill } from "react-icons/pi";
import { BsChatFill } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We are always ready to help to u by believing convinience and in
            minimal balance to provide best residences..
          </span>

          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <PiPhoneCallFill size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span>Call</span>
                    <span>023 456 789</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsChatFill size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span>Chat</span>
                    <span>023 456 789</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdVideoCall size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span>Video Call</span>
                    <span>023 456 789</span>
                  </div>
                </div>
                <div className="flexCenter button"> Video Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaMessage size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span>Message</span>
                    <span>023 456 789</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            </div>
          </div>
        </div>

        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
