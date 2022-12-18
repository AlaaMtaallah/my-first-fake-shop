import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product'

function App() {

  return (
    <>  
      
      <BrowserRouter>   
      <Navbar />    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route exact path="/cart" component={Cart} /> */}
          <Route path="/products/:id" element={Product} /> 
        </Routes>
      </BrowserRouter>     
    </>
  );
}

export default App;
