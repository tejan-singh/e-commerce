import {Routes, Route} from 'react-router-dom'
import Mockman from 'mockman-js'
import "./App.css";
import Products from './pages/Products';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="*" element={<Error404/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path='/product/:productId' element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
