import * as React from "react";
import { Routes, Route,} from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
function App() {
  return (
<>
     <Routes>
     <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
           <Route path="catalog" element={<Catalog/>} />
           <Route path="product" element={<Product/>} />
           <Route path="cart" element={<ShoppingCart/>} />
           <Route path="checkout" element={<Checkout/>} />
           
  
        
        
          </Route>
      </Routes>
  </> 
  );
}

export default App;