import { dimsumDishes } from './cardInfo'
import ProductCard from './productContainer'
import { useEffect, useState } from 'react';

const CardGrid = ({sendDishes2}) => {

    const [dishesAdded, setDishesAdded] = useState([])
    
    
    const addToCart = (dish) => {
        setDishesAdded((prevArray) => [...prevArray, dish])
        // sendDishes2(dishesAdded)
        // console.log(dish)
        console.log(dishesAdded)
    }

    useEffect(() => {
        sendDishes2(dishesAdded)
    })

    let productArray = dimsumDishes.map((dish, index) => (
        <ProductCard key={index} itemName={dish.name} itemPrice={dish.price} itemImage={dish.source} handleButtonClick={()=> addToCart(dish)} />
    ))

    return (
        <div style={container}>
            {productArray}
        </div>
    )
}


// let newScore = currentScore + 1 
// setCurrentScore(newScore)
// setCardsClicked((prevState) => [...prevState, dishName])
















const container = {
    padding: '20px',
    maxWidth: '90vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)', 
    columnGap: '15px',
    rowGap: '15px',
}

export default CardGrid