import { dimsumDishes } from './cardInfo'
import ProductCard from './productContainer'
import { useState } from 'react';

const CardGrid = () => {

    const [dishesAdded, setDishesAdded] = useState([])

    const addToCart = (dish) => {
        setDishesAdded((prevState) => [...prevState, dish])
        console.log(dishesAdded)
    }

    let productArray = dimsumDishes.map((dish, index) => (
        <ProductCard key={index} itemName={dish.name} itemPrice={dish.price} itemImage={dish.source} handleButtonClick={()=> addToCart(dish)}/>
    ))

    return (
        <div style={container}>
            {productArray}
        </div>
    )
}

const container = {
    padding: '20px',
    maxWidth: '90vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)', 
    columnGap: '15px',
    rowGap: '15px',
}

export default CardGrid