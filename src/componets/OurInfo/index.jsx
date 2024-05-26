import React from "react";
import img from "../img//orr.png";
// import imgLine from "../img/line.png";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const OurInfo = () => {
  return (
    <div className="Our">
      <div className="container">
        <section className="Our--content">
          <div className="Our--content__text">
            <p>
              "Кадам" – бул англис тилин үйрөнүүгө багытталган инновациялык{" "}
              <br />
              онлайн платформа, ал өз колдонуучуларына тил үйрөнүүнүн кеңири{" "}
              <br />
              спектрин сунуштайт. Бул платформа ар кандай деңгээлдеги <br />
              окуучуларга ылайыкташтырылган жана аларга англис тилин оңой жана{" "}
              <br />
              натыйжалуу үйрөнүүгө шарт түзөт.
            </p>
          </div>
          <div className="Our--content__img">
            <img src={img} alt="img" width={300} />
          </div>
          {/* <img src={imgLine} alt="img" className="img-line" /> */}
          <div className="content--voluenter">
            <h3>Платформанын өнүгүүшүнө ыктыярчы болуу үчүн </h3>
            <div className="content--voluenter__soc">
              <h2 className="wats">
                <a href="https://wa.me/+996500182838" target="blank">
                  <FaSquareWhatsapp />
                </a>
              </h2>
              <h2 className="tg">
                <a href=" https://t.me/almazbekoff" target="blank">
                  <FaTelegram />
                </a>
              </h2>
              <h2 className="gmail">
                <a href="almazbeko2002@gmail.com" target="blank">
                  <SiGmail />
                </a>
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurInfo;
