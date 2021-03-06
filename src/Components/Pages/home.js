import dimsumBackground from './background-image.jpeg'
import { Link } from 'react-router-dom'
import '../card.css'


const Home = (props) => {
    return (
        <div style={setBackground}>
            <h2 style={homeTitle}>Now breakfast are boring without us.</h2>
            <Link to="/product"> <button style={homeButton} className="Container">Order now</button> </Link>
            <span style={titleDescription}>the most affordable tasty dim sums are here</span>
        </div>
    )
}

const setBackground = {
    backgroundImage: `url(${dimsumBackground})`, 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', 
    height: '88vh',
    position: 'relative',
}

const homeTitle = {
    position: 'absolute',
    bottom: '250px',
    left: '85px',
    fontSize: '3.5rem',
}

const homeButton = {
    position: 'absolute',
    bottom: '225px',
    left: '85px',
    height: '4rem',
    width: '12rem',
    backgroundColor: '#413F42',
    fontSize: '1.5rem',
    color: 'white',
    borderRadius: '30px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: 'rgb(0 0 0 / 35%) 0px 10px 15px',
    transition: 'transform 0.2s ease 0s',
}

const titleDescription = {
    position: 'absolute',
    bottom: '270px',
    right: '235px',
    fontSize: '1.4rem',
}

export default Home;