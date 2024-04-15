import React from "react";
import "./DishCard.css";

function DishCard({ image, title, price }) {
  return (
    <div className="mainDish">
      <img src={image} alt={title} className="dishImage" />
      <h2 className="dishTitle">{title}</h2>
      <p className="dishPrice">{price}</p>
    </div>
  );
}

export default DishCard;
