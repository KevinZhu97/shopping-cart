

const ProductCard = ({itemName, itemPrice, itemImage}) => {
    return (
        <div style={container}>
            <img style={image} src={itemImage} alt=''/>
            <p style={name}>{itemName}</p>
            <p style={price}>{itemPrice}</p>
            <button style={button}>Add to Cart</button>
        </div>
    )
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
}

const image = {
    width: '100px',
    height: '100px',
    borderRadius: '10px',
}

const name = {
    margin: '0',
    fontWeight: 'bold',
}

const price = {
    margin: '0',
}

const button = {
    
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    padding: '5px',
}
export default ProductCard