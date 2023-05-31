import React, { useState, useRef } from 'react';
import './App.css';

const ProductList = () => {

    const [isModelVisible, setIsModelVisible] = useState(false);
    const model1Ref = useRef(null);

    const handleViewButtonClick = () => {
      setIsModelVisible(true);
    };

    const handleCloseButtonClick = () => {
        setIsModelVisible(false);
    };

    const handleWindowClick = (event) => {
        if (event.target === model1Ref.current) {
          setIsModelVisible(false);
        }
    };

  const products = [
    { id: 1, name: 'Apple MacBook Air 13.6', image: 'images/laptop-1.jpg',dis_price:"1599.99", act_price:"1699.99" },
    { id: 2, name: 'Apple MacBook Pro 16', image: 'images/laptop-2.jpeg',dis_price:"2099.99", act_price:"2199.99" },
    { id: 3, name: 'Apple Macbook Pro 13', image: 'images/laptop-3.jpeg',dis_price:"2165.99", act_price:"2379.99" },
    { id: 4, name: 'Apple MacBook Pro A1278', image: 'images/laptop-4.jpeg',dis_price:"789.99", act_price:"974.99" },
    { id: 5, name: 'Dell Alienware m17 R5 17.3', image: 'images/laptop-5.jpg',dis_price:"1965.99", act_price:"2214.99" },

    // Add more products as needed
  ];

  return (
    <>
    {isModelVisible && (
          <div id="model1" className="model" style={{ display: 'block' }} ref={model1Ref} onClick={handleWindowClick}>
          <div className="model-data">
              <div className="model-header">
                  <span id="close-button" className="close-button"  onClick={handleCloseButtonClick}>&times;</span>
              </div>
              <div className="model-body">
                  <h3>Product Specifications</h3>
                  <p>Apple’s thinnest and lightest notebook gets supercharged with the Apple M2 chip. The M2 chip starts the next generation of Apple silicon,
                      with even more of the speed and power efficiency of M1. So you can get more done faster with a more powerful 8‑core CPU.
                      Create captivating images and animations with up to a 8-core GPU and work with more streams of 4K and 8K ProRes video.
                      <br /><br />
                      • Apple-designed M2 chip for a giant leap in CPU, GPU and machine learning performance<br />
                      • Go longer than ever with up to 18 hours of battery life (Battery life varies by use and configuration)<br />
                      • 8-core CPU delivers up to 3.5x faster performance<br />
                      • 8-core GPU cores with up to 5x faster graphics for graphics-intensive apps and games<br />
                      • 16-core Neural Engine for advanced machine learning<br />
                      • 8GB of unified memory so everything you do is fast and fluid<br />
                      • Superfast SSD storage launches apps and opens files in an instant<br />
                      • Fanless design for silent operation<br />
                      • 13.6-inch Liquid Retina display (Screen size is measured diagonally)<br />
                      • FaceTime HD camera with advanced image signal processor for clearer, sharper video calls<br />
                      • Three-microphone array focuses on your voice instead of what’s going on around you<br />
                      • Next-generation Wi-Fi 6 for faster connectivity<br />
                      • Two Thunderbolt/USB 4 ports for charging and accessories<br />
                      • Backlit Magic Keyboard and Touch ID for secure unlock and payments<br />
                      • macOS Big Sur introduces a bold new design and major app updates for Safari, Messages and Maps<br />
                  </p>
              </div>
          </div>
      </div>
      )}
  
      
      <div className="item-container">
              {products.map(product => (
                  <div className="item" key={product.id}>
                      <div className="parent-img">
                          <ul className="img-action">
                              <li><img id="btn-view" className="menu-icon" src="images/view.png" alt="View Details" onClick={handleViewButtonClick}/></li>
                          </ul>
                          <img className="item-img" src={product.image} alt={product.name} />
                      </div>

                      <h2>{product.name}</h2>

                      <div>
                          <h4>${product.dis_price}</h4>
                          <h6><s>${product.act_price}</s></h6>
                      </div>

                      <button className="add-to-cart buy-button" type="button" onClick="">Add to cart</button>
                      <input type="hidden" value={product.dis_price} className="product-price" />
                      <img className="product-image" src={product.image} alt={product.name} hidden />
                  </div>
              ))}
    </div>
    </>
  );
};
export default ProductList;