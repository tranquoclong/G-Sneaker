import Products from "./components/Products";
import Cart from "./components/Cart";
import data from "./Data";
import { useState } from "react";
function App() {
  const { shoes } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((a) => a.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((a) =>
          a.id === product.id ? { ...exist, qty: exist.qty + 1 } : a
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((a) => a.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((a) => a.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((a) =>
          a.id === product.id ? { ...exist, qty: exist.qty - 1 } : a
        )
      );
    }
  };
  const onRemoveAll = (product) => {
    setCartItems(cartItems.filter((a) => a.id !== product.id));
  };
  return (
    <div className="main-content">
      <Products cartItems={cartItems} shoes={shoes} onAdd={onAdd}></Products>
      <Cart
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onRemoveAll={onRemoveAll}
      ></Cart>
    </div>
  );
}

export default App;
