import dimsumBackground from './background-image2.jpg'
import ProductGrid from '../productGrid'

const Product = () => {
    return (
        <div style={setBackground}>
            <ProductGrid/>
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
    zIndex: '-2',
}

export default Product 