import React, { useState, useContext } from "react";
import { EnglishContex } from "../../contex";
import { resources } from "../../data";
import { useNavigate } from "react-router-dom";

const Platform = () => {
  const { setDetail } = useContext(EnglishContex);
  const nav = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredResources, setFilteredResources] = useState(resources);

  const visitDetails = (data) => {
    setDetail(data);
    nav("/details");
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredResources(resources);
    } else {
      const filtered = resources.filter(
        (resource) => resource.type === category
      );
      setFilteredResources(filtered);
    }
  };

  return (
    <div id="platform">
      <div className="container">
        <div className="category">
          <div
            className="category--content"
            onClick={() => handleCategoryClick("all")}
          >
            <h2>все</h2>
          </div>
          <div
            className="category--content"
            onClick={() => handleCategoryClick("Веб-сайты")}
          >
            <h2>Вебсайты</h2>
          </div>
          <div
            className="category--content"
            onClick={() => handleCategoryClick("Приложения")}
          >
            <h2>Приложения</h2>
          </div>
          <div
            className="category--content"
            onClick={() => handleCategoryClick("Видеоуроки")}
          >
            <h2>Видеоуроки</h2>
          </div>
        </div>

        <div className="plattform">
          {filteredResources.map((el, index) => (
            <div className="card" key={index} onClick={() => visitDetails(el)}>
              <img src={el.img} alt="img" width={200} height={200} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;
