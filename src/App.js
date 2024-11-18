import './App.css';
import storeImage from "./CookieStore.jpg";
import ProductList from './Components/ProductList';

function App() {

  return (
    <div className="App">
       <h1>Levain Bakery</h1>
       <p>A neighborhood bakery since 1995 baking BIG beloved cookies and more</p>
       <img className='Store-Img' src={storeImage} alt="Levain Bakery" />
    
    <ProductList />
    
    </div>
  );
}

export default App;
