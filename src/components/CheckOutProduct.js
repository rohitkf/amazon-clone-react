import React from "react";
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'

function CheckOutProduct({ id, title, image, price, rating }) {
  const [{basket},dispatch] = useStateValue();
  const removeFromBasket=()=>{
    dispatch({
        type:'REMOVE_FROM_BASKET',
        id : id
    })
  }

  return (
    <div className="checkoutproduct">
      <img src={image} alt="" className="checkoutProduct__image"/>
        <div className="checkoutProduct__info">
          <p className="checkoutProduct_title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_,i) => (
                // eslint-disable-next-line
                <span role="image">⭐</span>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  );
}

export default CheckOutProduct;
