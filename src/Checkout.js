import React from "react";
import Add from "./add";
import "./Checkout.css";
import ProductCheckout from "./ProductCheckout";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  console.log("basket : ", basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__img"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket.length === 0 ? (
          <div>
            <h1>Your Shopping Basket is empty</h1>
            <p className="pt">
              You have items in your basket. To buy one go to "Market Place"{" "}
            </p>
          </div>
        ) : (
          <div>
            <h1 className="ht">Your Shopping Basket is filled</h1>
            {basket.map((item, index) => (
              <ProductCheckout
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={item.key}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
