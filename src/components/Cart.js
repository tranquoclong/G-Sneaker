import React from "react";
import trash from "../assets/trash.png";
import nike from "../assets/nike.png";
export default function Cart(props) {
  const { cartItems, onAdd, onRemove, onRemoveAll } = props;
  const price = cartItems.reduce((a, b) => a + b.qty * b.price, 0);
  return (
    <div className="card">
      <div className="card-top">
        <img className="card-top-logo" src={nike} alt="logo" />
      </div>
      <div className="card-title">
        Your cart<span className="card-title-amount">${price.toFixed(2)}</span>
      </div>
      <div className="card-body">
        {cartItems.length === 0 && (
          <div className="cart-empty">
            <p className="cart-empty-text">Your cart is empty.</p>
          </div>
        )}
        <div className="cart-items">
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-left">
                  <div
                    className="cart-item-image"
                    style={{ backgroundColor: item.color }}
                  >
                    <div className="cart-item-image-block">
                      <img src={item.image} alt={item.image} />
                    </div>
                  </div>
                </div>
                <div cclassNamelass="cart-item-right">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">
                    ${item.price.toFixed(2)}
                  </div>
                  <div className="cart-item-actions">
                    <div className="cart-item-count">
                      <div
                        className="cart-item-count-button"
                        onClick={() => onRemove(item)}
                      >
                        -
                      </div>
                      <div className="cart-item-count-number"> {item.qty}</div>
                      <div
                        className="cart-item-count-button"
                        onClick={() => onAdd(item)}
                      >
                        +
                      </div>
                    </div>
                    <div
                      className="cart-item-remove"
                      onClick={() => onRemoveAll(item)}
                    >
                      <img
                        className="cart-item-remove-icon"
                        src={trash}
                        alt={trash}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
