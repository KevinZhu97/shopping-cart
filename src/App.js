import Header from './Components/header'
import Main from './Components/main'
import { BrowserRouter } from 'react-router-dom'
import React, { useState } from 'react';

function App() {

  const [cartQuantity, setCartQuantity] = useState()
  
  const getDishesAdded = (data) => {
    setCartQuantity(data.length)
    console.log(data)
  } 

  return (
    <div>
      <BrowserRouter basename="/shopping-cart">
        <Header cartAmount={cartQuantity}/>
        <Main getDishesAdded={getDishesAdded}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
