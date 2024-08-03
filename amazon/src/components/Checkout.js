import React from "react";
import "./Checkout.css";
import checkOutImg from "./../images/checkoutAd.jpg";
import { useAuth } from "../context/GlobalState";
import CheckOutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

export default function Checkout() {
  const { user, basket } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src={checkOutImg} alt="" />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout-title">Your shopping Basket</h2>
          {basket.length > 0 ? (
            basket.map((item) => (
              <CheckOutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p>
              You have no Items in your basket. To Buy one ore more items, click
              "Add To Basket"
            </p>
          )}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}
