import React from "react";

export default function ProductItem(props) {
  const { cartItems, productItem, onAdd } = props;
  return (
    <div className="shop-item">
      <div
        className="shop-item-image"
        style={{ backgroundColor: productItem.color }}
      >
        <img src={productItem.image} alt={productItem.image} />
      </div>
      <div className="shop-item-name">{productItem.name}</div>
      <div className="shop-item-description">{productItem.description}</div>
      <div className="shop-item-bottom">
        <div className="shop-item-price">${productItem.price}</div>
        <div className="shop-item-button">
          {/* {cartItems.map((item) =>
            item.id == productItem.id ? (
              <div className="shop-item-button-cover">
                <div className="shop-item-button-cover-check-icon"></div>
              </div>
            ) : (
              <p onClick={() => onAdd(productItem)}>ADD TO CART</p>
            )
          )} */}
          {/* {cartItems.id === productItem.id ? (
            <div className="shop-item-button-cover">
              <div className="shop-item-button-cover-check-icon"></div>
            </div>
          ) : (
            <p onClick={() => onAdd(productItem)}>ADD TO CART</p>
          )} */}
          <p onClick={() => onAdd(productItem)}>ADD TO CART</p>
        </div>
      </div>
    </div>
  );
}
