import dimsumBackground from './background-image6.jpg'
import facebookIcon from './facebook (1).png'
import instagramIcom from './instagram (2).png'
import whatsappIcon from './whatsapp.png'
import mapIcon from './google-maps.png'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div style={container}>
            <div style={setBackground}></div>
            <span style={inTouch}></span>
            <div style={leftContacts}>
                <img style={contactIcons} src={facebookIcon} alt="facebook redirect"></img>
                <img style={contactIcons} src={instagramIcom} alt="instagram redirect"></img>
            </div>
            <div style={rightContacts}>
                <img style={contactIcons} src={mapIcon} alt="messenger redirect"></img>
                <img style={contactIcons} src={whatsappIcon} alt="github redirect"></img>
            </div>
            <div style={contactInfo}>
                <div>Questions or comments?</div>
                <div>nihao@restaurantdimsamsum.co</div>
            </div>
            <div style={location}>
                <span>Dim Sum Sam</span>
                <span>Howland Center, Ohio USA</span>
            </div>
        </div>
    )
}

const container = {
    position: 'relative',
    zIndex: '1',
}
const setBackground = {
    backgroundImage: `url(${dimsumBackground})`, 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', 
    height: '88vh',
    position: 'relative',
    opacity: '0.6',
    zIndex: '-1'
}

const contactInfo = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: '40%',
    left: '18%',
    fontSize: '4rem',
    cursor: 'pointer'
}

const contactIcons = {
    height: '3.5rem',
    width: '3.5rem',
    margin: '1rem',
    cursor: 'pointer',
    opacity: '0.95',
}

const leftContacts = {
    position: 'absolute',
    top: '20px',
    right: '110px',
    display: 'flex',
    flexDirection: 'column'
}

const rightContacts = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column'
}

const inTouch = {
    position: 'absolute',
    top: '190px',
    right: '160px',
    fontSize: '2rem',
}

const location = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    position: 'absolute',
    bottom: '40px',
    right: '500px',
}

export default Contact