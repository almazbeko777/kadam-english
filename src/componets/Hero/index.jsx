import React, { useContext, useState } from "react";
import img1 from "../img/My project (2) 1.png";
import imgLIne from "../img/Ellipse 110.png";
import platform from "../img/platform.png";
import duo from "../img/duolingo-removebg-preview (1).png";
import you from "../img/Youtube_logo.png";
import busu from "../img/busuu-icon-192x192-transparent.png";
import Slider from "../Slider";
import Info from "../Info";
import logos from "../img/_-_e__1_-removebg-preview.png";
// import line from "../img/Дизайн_без_названия-removebg-preview.png";
import book from "../img/book.png";
import SliderRes from "../SliderRes";
import books from "../img/books..png";
import babell from "../img/2-s.png";
import headphones from "../img/po.png";
import img from "../img/re1.png";
import { EnglishContex } from "../../contex";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const { modal, user, setUser, sign, setSign } = useContext(EnglishContex);
  const bgFun = () => {
    setUser(true);
    setSign(false);
  };
  const messageSucces = () => {
    toast.error("Сыр сөз туура эмес!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const nav = useNavigate();
  const [inp, setInp] = useState("");
  const enter = (e, input) => {
    if (e.key === "Enter") {
      if (input === "2002") {
        setUser(true);
        setInp("");
        nav("/user");
      } else {
        messageSucces();
        setInp("");
      }
    }
  };

  const goToUser = () => {
    if (inp === "2002") {
      setUser(true);
      setInp("");

      nav("/user");
    } else {
      messageSucces();
      setInp("");
    }
  };

  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--content">
            <h1
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Ар бир
              <img
                src={logos}
                alt="img"
                width={200}
                style={{
                  margin: "0 0 10px 20px",
                }}
              />
            </h1>
            <h1>
              сизди жеңиштерге <br />
              жакындатат
            </h1>
            <p>
              Тил үйрөнүү үчүн жаңы <br />
              мүмкүнчүлүктөр жана заманбап технология
            </p>
          </div>
          <div className="hero--img">
            <img src={img1} alt="img" />
          </div>
          <img src={imgLIne} alt="img" className="elip" />
          <img src={duo} alt="img" className="duo" />
          <img src={you} alt="img" className="you" />
          <img src={busu} alt="img" className="busu" />
          {/* <img src={line} alt="img" className="hero--line" width={300} /> */}
          <img src={books} alt="img" className="books" />
          <img src={babell} alt="img" className="babel" />
          <img src={headphones} alt="img" className="headphones" />
          <img src={img} alt="img" className="line-blue" />
          <div
            className="hero--bg"
            onClick={() => bgFun()}
            style={{
              display: user ? "none" : "block",
              background: !modal ? "rgba(255, 255, 255, 0.416)" : "#0f1c2e4b",
            }}
          ></div>
          <div
            className="hero--user"
            style={{
              background: !modal ? "#5454d4" : "#ff7143",
              display: user ? "none" : "block",
            }}
          >
            <div className="hero--user__content">
              <div className="div-line"></div>
              {!sign ? (
                <>
                  <h3>Алмазбеков Бекмырза</h3>
                  <button
                    style={{
                      background: modal ? "#5454d4" : "#ff7143",
                      display: sign ? "none" : "block",
                    }}
                    onClick={() => setSign(true)}
                  >
                    Кирүү
                  </button>
                </>
              ) : (
                <>
                  <h5>Сыр сөздү жазыңыз !</h5>
                  <div className="hero--user__content--input">
                    <input
                      value={inp}
                      type="password"
                      placeholder="Сыр сөз"
                      onChange={(e) => setInp(e.target.value)}
                      onKeyDown={(e) => enter(e, inp)}
                    />
                    <div
                      className="hero--user__content--input__line"
                      style={{
                        background: !modal ? "#ff7143" : "#5454d4",
                      }}
                    >
                      <IoArrowForwardOutline
                        color="white"
                        onClick={() => goToUser()}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <Info />
        <div className="line-hr"></div>
        <div className="style-text">
          <h4>Сунушталган платформалар</h4>
          <img src={platform} alt="img" width={40} />
        </div>
        <div className="svg">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
              opacity=".25"
            />
            <path
              d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
              opacity=".5"
            />
            <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
          </svg>
        </div>
        <ToastContainer />
        <Slider />
        <div className="line-res"></div>
        <div className="style-text">
          <h5>Сунушталган ресурстар</h5>
          <img src={book} alt="img" width={40} />
        </div>
        <div className="svg1">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
              opacity=".25"
            />
            <path
              d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
              opacity=".5"
            />
            <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
          </svg>
        </div>
        <SliderRes />
      </div>
    </div>
  );
};

export default Hero;
