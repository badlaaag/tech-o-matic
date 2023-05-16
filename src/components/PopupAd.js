import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import LoginRegister from "../pages/other/LoginRegister";

const PopupAd = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("adDisplayed", "true");
  };

  useEffect(() => {
    const hasAdDisplayed = sessionStorage.getItem("adDisplayed");
    if (hasAdDisplayed) {
      setIsOpen(false);
    } else {
      sessionStorage.setItem("adDisplayed", "true");
    }
  }, []);

  return (
    <>
      {isOpen && (
        <div className="popup-ad">
          <div className="popup-content">
            <button className="close-btn" onClick={handleClose}>
              X
            </button>
           
            <h2 className="popup-title">Big Discount Now!</h2>
            <img src="assets/img//bg/ads.jpg" className="popup-text"></img>
           
          </div>
        </div>
      )}
    </>
  );
};

export default PopupAd;
