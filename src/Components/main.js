import Home from './Pages/home'
import Contact from './Pages/contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Main = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}

export default Main