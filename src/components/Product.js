import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{basket},dispatch] = useStateValue();
  const addToBasket =()=>{
    dispatch({
        type : 'ADD_TO_BASKET',
        item:{ id,title,image,price,rating }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              // eslint-disable-next-line
              <span role="image">⭐</span>
            ))}
        </div>
      </div>
      <img src={image} alt=""></img>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
