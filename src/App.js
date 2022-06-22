import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
function App() {
  return (
<>
     <Routes>
     <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
           {/* <Route path="spaces" element={< />} /> */}
           
  
        
        
          </Route>
      </Routes>
  </> 
  );
}

export default App;