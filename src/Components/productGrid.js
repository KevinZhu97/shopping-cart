import { dimsumDishes } from './cardInfo'
import ProductCard from './productContainer'

const CardGrid = () => {

    let productArray = dimsumDishes.map((dish, index) => (
        <ProductCard key={index} itemName={dish.name} itemPrice={dish.price} itemImage={dish.source}/>
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