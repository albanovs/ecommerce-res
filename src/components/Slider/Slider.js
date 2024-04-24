import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Slider.module.scss";


export function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div className={styles.slide}>
          <h3>1</h3>
        </div>
        <div className={styles.slide}>
          <h3>2</h3>
        </div>
        <div className={styles.slide}>
          <h3>3</h3>
        </div>
        <div className={styles.slide}>
          <h3>4</h3>
        </div>
        <div className={styles.slide}>
          <h3>5</h3>
        </div>
        <div className={styles.slide}>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
);

}
