import './card.css'
import { connect } from 'react-redux'
import { addToCart } from '../redux/Shopping/shopping-actions'

const ProductCard = ({itemName, itemPrice, itemImage, addToCart, productData}) => {
    return (
        <div style={container} >
            <img className="Container" style={image} src={itemImage} alt='' />
            <p style={name}>{itemName}</p>
            <p style={price}>{itemPrice}</p>
            <button className="Container" style={button} onClick={()=>addToCart(productData.id)}>Add to Cart</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid gray',
    width: '150px',
    height: '150px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255,255,255,0.4)',
    padding: '20px',
    boxShadow: 'rgb(0 0 0 / 35%) 0px 10px 15px',
    
}

const image = {
    width: '100px',
    height: '100px',
    borderRadius: '10px',
    marginBottom: '2px',
    transition: 'transform 0.3s ease 0s',
}

const name = {
    margin: '0',
    fontWeight: 'bold',
}

const price = {
    margin: '0',
}

const button = {
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    padding: '5px',
    transition: 'transform 0.3s ease 0s',
}
export default connect(null, mapDispatchToProps)(ProductCard)