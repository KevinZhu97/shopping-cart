import dimsumBackground from './background-image3.jpg'
import facebookIcon from './facebook (1).png'
import instagramIcom from './instagram (2).png'
import whatsappIcon from './whatsapp.png'
import mapIcon from './google-maps.png'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div style={setBackground}>
            <div style={leftContacts}>
                <img style={contactIcons} src={facebookIcon} alt="facebook redirect"></img>
                <img style={contactIcons} src={instagramIcom} alt="instagram redirect"></img>
            </div>
            <div style={rightContacts}>
                <img style={contactIcons} src={mapIcon} alt="messenger redirect"></img>
                <img style={contactIcons} src={whatsappIcon} alt="github redirect"></img>
            </div>
            {/* <div style={location}>
                <span>Sunly Restaurant</span>
                <span>Howland Center, Ohio USA</span>
            </div> */}
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

const contactIcons = {
    height: '4rem',
    width: '4rem',
    margin: '2rem',
    padding: '1rem',
    cursor: 'pointer'
}

const leftContacts = {
    position: 'absolute',
    top: '200px',
    left: '100px',
    display: 'flex',
    flexDirection: 'column'
}

const rightContacts = {
    position: 'absolute',
    top: '200px',
    right: '100px',
    display: 'flex',
    flexDirection: 'column'
}

// const location = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: '1.2rem',
//     position: 'absolute',
//     bottom: '40px',
//     right: '500px',
// }

export default Contact