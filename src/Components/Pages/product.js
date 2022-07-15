import dimsumBackground from './background-image2.jpg'
import ProductGrid from '../productGrid'

const Product = ({sendDishes1}) => {
    return (
        <div style={setBackground}>
            <ProductGrid sendDishes2={sendDishes1}/>
        </div>
    )
}



























const setBackground = {
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${dimsumBackground})`, 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', 
    height: '88vh',
    position: 'relative',
    opacity: '',
}

export default Product 