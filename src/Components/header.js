import steamer from './food-steamer.png'
import { Link } from 'react-router-dom'

const Header = ({cartAmount}) => {

    return (
        <div style={navBar}>
            <Link to="/" style={link}> <h1 style={restaurantName}>Dim Sum Sam</h1> </Link>
            <div style={navBarButtonContainer}>
                <Link to="/" style={link}> <h2>Home</h2> </Link>
                <Link to="/product" style={link}> <h2>Menu</h2> </Link>
                <Link to="/contact" style={link}> <h2>Contact</h2> </Link>
                <img style={shoppingCart} src={steamer} alt="shopping cart"></img>
                <span style={cart}>{cartAmount}</span>
            </div>
        </div>
        
    )
}



















const navBar = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 100px',
    color: 'black',
    backgroundColor: '#F6F6F6',
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

const cart = {
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