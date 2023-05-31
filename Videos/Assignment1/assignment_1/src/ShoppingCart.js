import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ cartItems, onQuantityChange, onRemoveItem, onCheckout }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.product.id}>
              <img src={item.product.image} alt={item.product.name} />
              <h3>{item.product.name}</h3>
              <p>Price: ${item.product.price}</p>
              <p>Quantity:</p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => onQuantityChange(item.product, parseInt(e.target.value))}
              />
              <button onClick={() => onRemoveItem(item.product)}>Remove</button>
            </div>
          ))}
          <button onClick={onCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
