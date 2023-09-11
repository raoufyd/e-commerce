import React from "react";
import "./ProductCheckout.css";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "./StateProvider";

function ProductCheckout({ key, id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      key: key,
    });
  };
  return (
    <div className="ProductCheckout">
      <img className="ProductCheckout__img" src={image} alt="" />
      <div className="ProductCheckout__info">
        <h1>{title}</h1>
        <p>${price}</p>
        <Rating
          className="ProductCheckout__rating"
          defaultValue={rating}
          disabled
        />
        <button className="ProductCheckout__button" onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default ProductCheckout;
