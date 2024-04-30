import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiFlatPlatform } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";
import logo from "../img/_-_e__1_-removebg-preview.png";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { EnglishContex } from "../../contex";
import { FiSun } from "react-icons/fi";

const Header = () => {
  const { modal, setModal, user, setUser } = useContext(EnglishContex);
  const nav = useNavigate();
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--logo">
            <img
              src={logo}
              alt="img"
              width={150}
              onClick={() => nav("/")}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          <div className="header--nav">
            <NavLink to={"/"}>
              <h1>
                <h3 style={{ color: !modal ? "#5454d4" : "#ff7143" }}>
                  <FaHome />
                </h3>

                <h4
                  style={{
                    color: !modal ? "black" : "white",
                  }}
                >
                  Башкы бет
                </h4>
              </h1>
            </NavLink>
            <NavLink to={"/platform"}>
              <h1>
                <h3 style={{ color: !modal ? "#5454d4" : "#ff7143" }}>
                  <GiFlatPlatform />
                </h3>
                <h4
                  style={{
                    color: !modal ? "black" : "white",
                  }}
                >
                  Платформалар
                </h4>
              </h1>
            </NavLink>
            <NavLink to={"/resurs"}>
              <h1>
                <h3 style={{ color: !modal ? "#5454d4" : "#ff7143" }}>
                  <GrResources />
                </h3>
                <h4
                  style={{
                    color: !modal ? "black" : "white",
                  }}
                >
                  Ресурстар
                </h4>
              </h1>
            </NavLink>
            <NavLink to={"/nas"}>
              <h1>
                <h3 style={{ color: !modal ? "#5454d4" : "#ff7143" }}>
                  <FaInfoCircle />
                </h3>
                <h4
                  style={{
                    color: !modal ? "black" : "white",
                  }}
                >
                  Биз жөнүндө
                </h4>
              </h1>
            </NavLink>
          </div>
          <div className="header--icon">
            {!modal ? (
              <h3 onClick={() => setModal(!modal)}>
                <h3 style={{ color: !modal ? "#5454d4" : "#ff7143" }}>
                  <MdOutlineDarkMode />
                </h3>
              </h3>
            ) : (
              <h3 onClick={() => setModal(!modal)}>
                <FiSun color="#ff7143" />
              </h3>
            )}

            <h3 style={{ color: !modal ? "#5454d4" : "#ff7143" }}>
              <FaUserGraduate onClick={() => setUser(!user)} />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
