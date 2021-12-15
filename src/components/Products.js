import React from "react";
import ProductItem from "./ProductItem";
import nike from "../assets/nike.png";

export default function Products(props) {
  const { cartItems, shoes, onAdd } = props;
  return (
    <div className="card">
      <div className="card-top">
        <img src={nike} className="card-top-logo" alt="logo" />
      </div>
      <div className="card-title">Our Products</div>
      <div className="card-body">
        <div className="shop-items">
          {shoes.map((productItem) => (
            <ProductItem
              key={productItem.id}
              cartItems={cartItems}
              productItem={productItem}
              onAdd={onAdd}
            ></ProductItem>
          ))}
        </div>
      </div>
    </div>
  );
}
