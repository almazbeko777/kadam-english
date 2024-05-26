import React from "react";
import img from "../img/f2a2e608c854822ad2563a09595e7827.png";
import { LiaStarSolid } from "react-icons/lia";
import logoAPPstore from "../img/App-Store-Logo-2020.png";
import logoPlay from "../img/Logo_Play_512px_clr_nGVTgYY.width-500.format-webp.webp";
import logoWeb from "../img/logo-web.png";
import you from "../img/you.png";
import logoYou from "../img/Youtube_logo.png";
import logoBusu from "../img/busu-log.png";
import logoBBs from "../img/unnamed.png";
import quzlet from "../img/quzlet.png";
import sky from "../img/skyeng.png";
import { CgMoreO } from "react-icons/cg";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider--cards">
        <a href="https://www.duolingo.com/learn" target="blank">
          <div className="card_box">
            <img src={img} alt="img" width={250} />
            <div className="card_box--rating">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>

            <span></span>

            <div className="card_box--type">
              <img src={logoAPPstore} alt="img" width={50} />
              <img src={logoPlay} alt="img" width={30} />
              <img src={logoWeb} alt="img" width={30} />
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/@englishplaylists" target="blank">
          <div className="card_box">
            <img src={you} alt="img" width={250} />
            <h2
              style={{
                marginTop: "30px",
              }}
            >
              Англиский с нуля до продвинутого
            </h2>
            <div className="card_box--rating">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>

            <span></span>

            <div className="card_box--type">
              <img src={logoYou} alt="img" width={50} />
            </div>
          </div>
        </a>
        <a href="https://www.busuu.com/ru" target="blank">
          <div className="card_box">
            <img src={logoBusu} alt="img" width={250} />
            <div className="card_box--rating">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>

            <span></span>

            <div className="card_box--type">
              <img src={logoAPPstore} alt="img" width={50} />
              <img src={logoPlay} alt="img" width={30} />
              <img src={logoWeb} alt="img" width={30} />
            </div>
          </div>
        </a>
        <a href="https://www.bbc.co.uk/learningenglish/" target="blank">
          <div className="card_box">
            <img src={logoBBs} alt="img" width={250} />
            <div className="card_box--rating">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>

            <span></span>

            <div className="card_box--type">
              <a target="blank" href="https://www.bbc.co.uk/learningenglish">
                <img src={logoWeb} alt="img" width={30} />
              </a>
              <a
                target="blank"
                href="https://www.youtube.com/user/bbclearningenglish"
              >
                <img src={logoYou} alt="img" width={30} />
              </a>
            </div>
          </div>
        </a>
        <a href="https://quizlet.com/latest" target="blank">
          <div className="card_box">
            <img src={quzlet} alt="img" width={250} />
            <div className="card_box--rating">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>

            <span></span>

            <div className="card_box--type">
              <img src={logoAPPstore} alt="img" width={50} />
              <img src={logoPlay} alt="img" width={30} />
              <img src={logoWeb} alt="img" width={30} />
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/@skyengschool" target="blank">
          <div className="card_box">
            <img src={sky} alt="img" width={250} />
            <h2
              style={{
                marginTop: "40px",
              }}
            >
              Школа англиского языка
            </h2>
            <div className="card_box--rating">
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </div>
            <span></span>
            <div className="card_box--type">
              <a target="blank" href="https://skyeng.ru/">
                <img src={logoWeb} alt="img" width={30} />
              </a>
              <a target="blank" href="https://www.youtube.com/user/engvidkids">
                <img src={logoYou} alt="img" width={30} />
              </a>
            </div>
          </div>
        </a>
        <Link to={"/platform"}>
          <div className="more">
            <h2>Дагы</h2>
            <CgMoreO size={40} color="#5454d4" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Slider;
