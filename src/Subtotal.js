import "./Subtotal.css";
import React from "react";
import Add from "./add";
import { useStateValue } from "./StateProvider";
function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <h3>
        Subtotal ( {basket.length} items ) : $<Add items={basket} />
      </h3>
      <p>You can remove some items</p>
      <button>Proced to Payment</button>
    </div>
  );
}

export default Subtotal;
