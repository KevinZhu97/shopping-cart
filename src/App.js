import Header from './Components/header'
import Main from './Components/main'
import Home from './Components/Pages/home'
import Contact from './Components/Pages/contact'
import Footer from './Components/footer'
import { BrowserRouter } from 'react-router-dom'
import React, { useState } from 'react';
 
function App() {

  const [cartQuantity, setCartQuantity] = useState(0)
 
  return (
    <BrowserRouter>
      <Header cartAmount={cartQuantity}/>
      <Main/>
    </BrowserRouter>
  );
}


export default App;
