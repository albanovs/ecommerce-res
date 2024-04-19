import React from "react";
import "./MainPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Photo from "./beautiful-fantasy-wallpaper-ultra-hd-wallpaper-4k-sr10012418-1706506236698-cover.webp"



function MainPage() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  

  return (
    <div className="mainPage">
       <Slider {...settings}>
        <div className="slideMain">
        <div className="slideText">
            <h2 className="mainText">УЛУУ ТОО</h2>
            <span className="mainSpan">В ЛУЧШИХ ТРАДИЦИЯХ ВОСТОКА!</span>
        </div>
        <img src={Photo} alt="" />
        </div>

        <div className="slideMain">
        <div className="slideText">
            <h2 className="mainText">УЛУУ ТОО</h2>
            <span className="mainSpan">В ЛУЧШИХ ТРАДИЦИЯХ ВОСТОКА!</span>
        </div>
        <img src={Photo} alt="" />
        </div>

        <div className="slideMain">
        <div className="slideText">
            <h2 className="mainText">УЛУУ ТОО</h2>
            <span className="mainSpan">В ЛУЧШИХ ТРАДИЦИЯХ ВОСТОКА!</span>
        </div>
        <img src={Photo} alt="" />
        </div>

        <div className="slideMain">
        <div className="slideText">
            <h2 className="mainText">УЛУУ ТОО</h2>
            <span className="mainSpan">В ЛУЧШИХ ТРАДИЦИЯХ ВОСТОКА!</span>
        </div>
        <img src={Photo} alt="" />
        </div>

        <div className="slideMain">
        <div className="slideText">
            <h2 className="mainText">УЛУУ ТОО</h2>
            <span className="mainSpan">В ЛУЧШИХ ТРАДИЦИЯХ ВОСТОКА!</span>
        </div>
        <img src={Photo} alt="" />
        </div>

      </Slider>
    </div>
  );
}

export default MainPage;
