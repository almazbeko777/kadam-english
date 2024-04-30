import React, { useRef, useState, useEffect } from "react";
import img from "../img/IMAGE 2024-04-23 17:13:59.jpg";
import duo from "../img/f2a2e608c854822ad2563a09595e7827.png";
import you from "../img/busuu-icon-192x192-transparent.png";
import cup from "../img/cup.png";
import cup2 from "../img/cup2.png";
import { FaPlusCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";

import { PiStudentFill } from "react-icons/pi";
import { FaShare } from "react-icons/fa6";

function AvatarInput() {
  const inputRef = useRef(null);
  const [percentage, setPercentage] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    const storedImage = localStorage.getItem("avatarImage");
    if (storedImage) {
      setPreviewImage(storedImage);
    }
  }, []);

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
      startUploading();
      localStorage.setItem("avatarImage", reader.result);
    };
    reader.readAsDataURL(file);
  }

  function startUploading() {
    setIsUploading(true);
    setTimeout(() => {
      uploadTick();
    }, 600);
  }

  function uploadTick() {
    if (percentage === 100) {
      setTimeout(() => {
        onDone();
      }, 400);
      return;
    }
    setPercentage((prevPercentage) => prevPercentage + 1);
    requestAnimationFrame(uploadTick);
  }

  function onDone() {
    setIsUploading(false);
    setIsSuccess(true);
    setPercentage(0);
    setTimeout(() => {
      setIsSuccess(false);
      setPreviewImage(null);
    }, 1200);
  }

  return (
    <div id="user">
      <div className="container">
        <div className="user">
          <div className="user--icon">
            {" "}
            <div
              className={`avatar-input ${
                isUploading ? "avatar-input--uploading" : ""
              }`}
            >
              <label className="avatar-input__label" htmlFor="file-input">
                {previewImage ? (
                  <img
                    className="avatar-input__preview"
                    src={previewImage}
                    alt="Preview"
                  />
                ) : (
                  <div className="avatar-input__icon">
                    <img src={img} alt="img" />
                  </div>
                )}
                {isSuccess && (
                  <div className="avatar-input__success">
                    <img
                      src={img}
                      alt="img"
                      className="avatar-input__success-icon"
                    />
                  </div>
                )}
              </label>
              <input
                type="file"
                id="file-input"
                className="avatar-input__input"
                ref={inputRef}
                onChange={handleFileChange}
              />
            </div>
            <div className="user--content">
              <h3>Алмазбеков Бекмырза</h3>
              <h4>
                <PiStudentFill />
                Студент
              </h4>
            </div>
          </div>

          <div className="user--ss">
            <div className="user--ss__course">
              <h3>Азыр окуп жатам :</h3>
              <img src={duo} alt="img" width={40} />
              <img src={you} alt="img" width={30} />
            </div>
            <div className="user--ss__cups">
              <h3>Жетишкендиктерим :</h3>
              <img src={cup} alt="img" width={40} />
              <img src={cup2} alt="img" width={36} />
            </div>
            <div className="user--ss__plus">
              Курс кошуу
              <FaPlusCircle />
            </div>
          </div>
          <div className="user--seting">
            <h3>
              <IoSettings />
            </h3>
            <h3>
              <FaUserPlus />
            </h3>
            <h3>
              <FaShare />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarInput;
