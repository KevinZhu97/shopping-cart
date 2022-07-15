import Home from './Pages/home'
import Contact from './Pages/contact'
import Product from './Pages/product'
import { Routes, Route } from 'react-router-dom'

const Main = ({getDishesAdded}) => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Product sendDishes1={getDishesAdded}/>} />
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}

export default Main