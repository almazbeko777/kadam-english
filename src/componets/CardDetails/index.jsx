import React, { useContext } from "react";
import { EnglishContex } from "../../contex";
import { FaStar } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
// import { GiH2O } from "react-icons/gi";

const CardDetails = () => {
  const { detail } = useContext(EnglishContex);
  console.log(detail, "fffs");

  return (
    <div id="details">
      <div className="container">
        {detail !== null ? (
          <>
            <div className="detail">
              <a href={detail.url} target="blank">
                <img src={detail.img} alt="img" width={300} />
              </a>
              <div className="detail--content">
                {<h3>{detail.name}</h3>}
                <h4> {detail.type} </h4>
                <p>{detail.description}</p>

                <div className="detail--content__flex">
                  <div className="detail--content__flex--stars">
                    <h3
                      style={{
                        color: detail.rating > 1 ? " rgb(251, 255, 0)" : "gray",
                      }}
                    >
                      <FaStar />
                    </h3>
                    <h3
                      style={{
                        color: detail.rating > 2 ? " rgb(251, 255, 0)" : "gray",
                      }}
                    >
                      <FaStar />
                    </h3>
                    <h3
                      style={{
                        color: detail.rating > 3 ? " rgb(251, 255, 0)" : "gray",
                      }}
                    >
                      <FaStar />
                    </h3>
                    <h3
                      style={{
                        color: detail.rating > 4 ? " rgb(251, 255, 0)" : "gray",
                      }}
                    >
                      <FaStar />
                    </h3>
                    <h3
                      style={{
                        color:
                          detail.rating >= 5 ? " rgb(251, 255, 0)" : "gray",
                      }}
                    >
                      <FaStar />
                    </h3>
                  </div>
                  <h1>
                    <a href={detail.url} target="blank">
                      <FaRegShareFromSquare />
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="content-null">
            <h2>Артка чыгуу</h2>
            <button>kk</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
