import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
const Footer = () => {
  return (
    <div>
    <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>Mary Cloer Doss 2022</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>email me at marycdossdesign@gmail.com</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>connect with me on linkedin</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Linkin Icon</Nav.Link>
        </Nav.Item>
    </Nav>
    </div>
  )
}

export default Footer
