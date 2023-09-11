import React from "react";
function currencyFormat(num) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function Add({ items }) {
  let sum = 0;
  items.forEach(({ price }) => {
    sum += price;
  });

  return <div>{currencyFormat(sum)}</div>;
}

export default Add;
