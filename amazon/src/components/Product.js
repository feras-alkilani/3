import React from "react";
import starIcon from "./../images/icons/star.png";

import { useAuth } from "../context/GlobalState";
import "./Product.css";

export default function Product({ title, price, image, rating, id }) {
  const { dispatch } = useAuth();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
        quantity: 1
      }
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <p key={index}>
              <img src={starIcon} alt="" />
            </p>
          ))}
      </div>
      <img src={image} alt="product-image" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}
