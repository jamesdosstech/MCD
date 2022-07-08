import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import MaryIcon from '../assets/MaryDossLogo.svg'
import ToggleIcon from '../assets/Vector.png'
const Header = () => {
  return (
    <div>
        <Navbar bg='dark' expand='lg'>
            <Container>
                <Navbar.Brand href="#home">
                    <img style={{height: '40px', width: '40px'}} src={MaryIcon} />
                </Navbar.Brand>
                <Navbar.Toggle style={{color: 'red'}}/>
                <Navbar.Collapse style={{color: '#80B7B7'}} className="justify-content-end">
                    <Nav.Link style={{color: '#80B7B7'}} >About Me</Nav.Link>
                    <Nav.Link style={{color: '#80B7B7'}} >Resume</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
