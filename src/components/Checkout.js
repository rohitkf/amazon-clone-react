import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";
import AdImage from "../assets/images/Amazon_ad.png";
import "./Checkout.css";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={AdImage} alt=""></img>
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket Is Empty</h2>
            <p>
              You have no items in your basket. To buy or add a product, click
              on "Add to Basket" next to the item
            </p>
          </div>
        ) : (
          <div className="checout__title">
            <h2>Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
