import React from "react";
import styles from "./MainPage.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Photo from "./beautiful-fantasy-wallpaper-ultra-hd-wallpaper-4k-sr10012418-1706506236698-cover.webp";

export function MainPage() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={styles.mainPage}>
            <Slider {...settings}>
                <div className={styles.slideMain}>
                    <div className={styles.slideText}>
                        <h2 className={styles.mainText}>УЛУУ ТОО</h2>
                        <span className={styles.mainSpan}>В ЛУЧШИХ ТРАДИЦИЯХ ВОСТОКА!</span>
                    </div>
                    <img src={Photo} alt="" />
                </div>

                <div className={styles.slideMain}>
                    <div className={styles.slideText}>
                        <h2 className={styles.mainText}>УЛУУ ТОО</h2>
                        <span className={styles.mainSpan}>В ЛУЧШИХ ТРАДИЦИЯХ ВОСТОКА!</span>
                    </div>
                    <img src={Photo} alt="" />
                </div>

                <div className={styles.slideMain}>
                    <div className={styles.slideText}>
                        <h2 className={styles.mainText}>УЛУУ ТОО</h2>
                        <span className={styles.mainSpan}>В ЛУЧШИХ ТРАДИЦИЯХ ВОСТОКА!</span>
                    </div>
                    <img src={Photo} alt="" />
                </div>

                <div className={styles.slideMain}>
                    <div className={styles.slideText}>
                        <h2 className={styles.mainText}>УЛУУ ТОО</h2>
                        <span className={styles.mainSpan}>В ЛУЧШИХ ТРАДИЦИЯХ ВОСТОКА!</span>
                    </div>
                    <img src={Photo} alt="" />
                </div>

                <div className={styles.slideMain}>
                    <div className={styles.slideText}>
                        <h2 className={styles.mainText}>УЛУУ ТОО</h2>
                        <span className={styles.mainSpan}>В ЛУЧШИХ ТРАДИЦИЯХ ВОСТОКА!</span>
                    </div>
                    <img src={Photo} alt="" />
                </div>
            </Slider>
        </div>
    );
}
