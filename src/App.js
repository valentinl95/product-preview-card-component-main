import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="image-wrapper">
          <img className="image-product" src="" srcset="image-product-mobile.jpg 1w, image-product-desktop.jpg 2w" sizes="(max-width: 619px) 1px, 2px" alt="Product" />
        </div>
        <div className="content">
          <div className="main-content">
            <p className="montserrat title grey">PERFUME</p>
            <p className="fraunces bold name">Gabrielle Essence Eau De Parfum</p>
            <p className="montserrat text grey">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          </div>
          <div className="price-and-cart">
            <div className="pricing">
              <div className="actual-price fraunces">$149.99</div>
              <div className="base-price grey strike-through montserrat">$169.99</div>
            </div>
            <div className="add-to-cart montserrat">
              <img src="/icon-cart.svg" alt="" />
              <p>Add to Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
