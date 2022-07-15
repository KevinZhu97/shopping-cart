import Header from './Components/header'
import Main from './Components/main'
import { BrowserRouter } from 'react-router-dom'
import React, { useState } from 'react';
 
function App() {

  const [cartQuantity, setCartQuantity] = useState(0)
  
  const getDishesAdded = (data) => {
    setCartQuantity(data.length)
  } 
 
  return (
    <BrowserRouter>
      <Header cartAmount={cartQuantity}/>
      <Main getDishesAdded={getDishesAdded}/>
    </BrowserRouter>
  );
}


export default App;
