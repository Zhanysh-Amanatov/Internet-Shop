import React, { useState, useEffect } from "react";
import "./Slider.scss";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { data } from "./SliderData";
import { FiShoppingCart } from "react-icons/fi";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = data.length;
  //slideLength = 1 2 3
  //currentSlide = 0 1 2
  const autoScroll = true;
  let slideInterval;

  //functions to go to next,prev slides
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };
  //function to autoscroll
  const auto = () => {
    slideInterval = setInterval(nextSlide, 5000);
  };
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
        <MdArrowBackIos className="arrow prev" onClick={prevSlide} />
        <MdArrowForwardIos className="arrow next" onClick={nextSlide} />
      {data.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="productImg-content">
                <div className="content">
                  <p className="productName">{slide.productName}</p>
                  <p className="offer">{slide.offer}</p>
                  <h2 className="discound">{slide.discound}</h2>
                  <div className="prices">
                    <div className="oldPrice-crossLine">
                      <h4 className="oldPrice">{slide.oldPrice}</h4>
                      <div className="line"></div>
                    </div>
                    <h3 className="newPrice">{slide.newPrice}</h3>
                  </div>
                  <button className="basket-button">
                    в корзину <FiShoppingCart />
                  </button>
                </div>
                <img src={slide.image} alt="slide" className="product-img" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
