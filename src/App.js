import './App.css';
import storeImage from "./CookieStore.jpg";
import products from "./data/products";
import ProductItem from "./Components/ProductItem";

function App() {

  const productsList = products.map ((product, index) => {
return <ProductItem myProduct={product} />;
  });

  return (
    <div className="App">
       <h1>Levain Bakery</h1>
       <p>A neighborhood bakery since 1995 baking BIG beloved cookies and more</p>
     
       <img className='Store-Img' src={storeImage} alt="Levain Bakery" />
    <div className='Products-List'> {productsList} </div>
    </div>
  );
}

export default App;
