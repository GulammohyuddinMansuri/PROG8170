import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';


function App() {
  return (
    <div className="App">
      {/* Menu Bar */}
<div className="top-bar">
  <nav className="navbar">
    <div className="web-logo">
      Gada Electronics
    </div>

    <ul className="nav-links">
      <div className="menu">
      </div>
    </ul>

    <ul className="nav-links">
      <div className="side-menu">
        <li>
          <div className="cart-btn">
            <img id="view-cart" className="menu-icon" src="images/cart.png" alt="Cart" />
            <span className="cart-quantity">0</span>
          </div>
        </li>
      </div>
    </ul>
  </nav>

</div>

  {/* Product Data */}
  <ProductList />
  </div>
  );
}

export default App;