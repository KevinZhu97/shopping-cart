import steamer from './food-steamer.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div style={navBar}>
            <h1 style={restaurantName}>Sunly Rest</h1>
            <div style={navBarButtonContainer}>
                <Link to="/" style={link}> <h2>Home</h2> </Link>
                <h2>Shop</h2>
                <Link to='/contact' style={link}> <h2>Contact</h2> </Link>
                <img style={shoppingCart} src={steamer} alt="shopping cart"></img>
                <span style={cartAmount}>11</span>
            </div>
        </div>
        
    )
}

const navBar = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 100px',
    color: 'black',
    backgroundColor: 'white',
    position: 'relative',
    height: '10vh',
    alignItems: 'center',
    borderBottom: '2px double gray'
}

const navBarButtonContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '40px'
}

const shoppingCart = {
    height: '2rem',
    width: '2rem'
}

const cartAmount = {
    backgroundColor: 'red',
    position: 'absolute',
    right: '95px',
    bottom: '30px',
    height: '13px',
    width: '13px',
    borderRadius: '50%',
    fontSize: '12px',
    textAlign: 'center',
    padding: '2px',
    color: 'white',
    border: '1px white solid'
}

const restaurantName = {
    fontSize: '2.5rem',
    color: 'black'
}

const link = {
    textDecoration: 'none',
    color: 'black',
}


export default Header