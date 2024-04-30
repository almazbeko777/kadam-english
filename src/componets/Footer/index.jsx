import React from "react";
import logo from "../img/logo2.png";
import logotg from "../img/tg.webp";
import logowb from "../img/WhatsApp.svg.png";
import logogm from "../img/gmail.webp";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--content">
            <img src={logo} alt="img" width={200} />
            <div className="footer--line"></div>
            <p>Илим менен билимге көпүрө - Тил </p>
          </div>
          <div className="footer--call">
            <h2>Сунуштар үчүн : </h2>

            <div className="footer--call__in">
              {" "}
              <input type="text" placeholder="Менин сунушум ..." />
              <button>Жөнөтүү</button>
            </div>
          </div>
          <div className="footer--icon">
            <img src={logotg} alt="img" width={30} />
            <img src={logowb} alt="img" width={30} />
            <img src={logogm} alt="img" width={30} />
            <FaPhoneAlt color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
