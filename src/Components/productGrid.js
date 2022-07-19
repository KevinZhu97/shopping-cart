import ProductCard from './productContainer'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux'

const CardGrid = ({sendDishes2, products}) => {

    const [dishesAdded, setDishesAdded] = useState([])
    
    
    // const addToCart = (dish) => {
    //     setDishesAdded((prevArray) => [...prevArray, dish])
    // }

    useEffect(() => {
        sendDishes2(dishesAdded)
    })

    let productArray = products.map((dish) => (
        <ProductCard key={dish.id} itemName={dish.name} itemPrice={dish.price} itemImage={dish.source} productData={dish}/>
    ))

    return (
        <div style={container}>
            {productArray}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.shop.products,
    }
}

 
const container = {
    padding: '20px',
    maxWidth: '90vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)', 
    columnGap: '15px',
    rowGap: '15px',
}

export default connect(mapStateToProps)(CardGrid);