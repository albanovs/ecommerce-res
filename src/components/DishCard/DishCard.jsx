import React from "react";
import styles from './DishCard.module.scss';

export function DishCard({ image, title, price }) {
  return (
    <div className={styles.mainDish}>
      <img src={image} alt={title} className={styles.dishImage} />
      <h2 className={styles.dishTitle}>{title}</h2>
      <p className={styles.dishPrice}>{price}</p>
    </div>
);

}
