import steamer from './food-steamer.png'
import logo from './dim-sum-logo.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'

const Header = ({ cart }) => {


    //instead of passing cartAmount to header, it will get its own copy from App
    const [cartCount, setCartCount] = useState(0)
    const [isCartOpen, setIsCartOpen] = useState(false)

    useEffect(()=> {
        let count = 0;
        cart.forEach(item=> {
            count += item.qty
        });

        setCartCount(count);
    }, [cart, cartCount])

    const changeCartStatus = () => {
        if (!isCartOpen) {
            setIsCartOpen(true) 
        } else {
            setIsCartOpen(false)
        };
    }

    return (
        <div style={navBar}>
            <Link to="/" style={link}> <h1 style={restaurantName}>Dim Sum Sam</h1> </Link>
            <div style={navBarButtonContainer}>
                <Link to="/" style={link}> <h2>Home</h2> </Link>
                <Link to="/product" style={link}> <h2>Menu</h2> </Link>
                <Link to="/contact" style={link}> <h2>Contact</h2> </Link>
                <Link to="/cart" > <img style={shoppingCart} src={steamer} alt="shopping cart" onClick={changeCartStatus}></img> </Link>
                <span style={cartStyle}>{cartCount}</span>
            </div>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
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

const logoStyle = {
    height: '1rem',
    width: '1rem'
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

const cartStyle = {
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


export default connect(mapStateToProps)(Header);