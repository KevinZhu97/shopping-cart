import dimsumBackground from './background-image.jpeg'

const Home = () => {
    return (
        <div style={setBackground}>
            <h2 style={homeTitle}>Now breakfast are boring without us.</h2>
            <button style={homeButton}>Order now</button>
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
    bottom: '220px',
    left: '85px',
    height: '4rem',
    width: '12rem',
    backgroundColor: '#413F42',
    fontSize: '1.5rem',
    color: 'white',
    borderRadius: '30px',
    border: 'none',
}

const titleDescription = {
    position: 'absolute',
    bottom: '270px',
    right: '235px',
    fontSize: '1.4rem',
}

export default Home;