import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ key, id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO__BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        key: key,
      },
    });
  };

  return (
    <div className="product">
      <Card className="product__card" variant="outlined">
        <CardContent>
          <Typography className="product__title" variant="h6">
            {title}
          </Typography>
          <Typography className="product__price" variant="h6">
            ${price}
          </Typography>
          <div className="product__rating">
            <Rating defaultValue={rating} disabled />
          </div>
          <img className="product__image" src={image} alt="" />
          <div>
            <button onClick={addToBasket} className="product__button">
              Add to the basket
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Product;
