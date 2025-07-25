import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        {/* Logo on the left */}
        <Navbar.Brand href="#home" className="fw-bold">
          Cargo <span className="text-warning">Ton</span>
        </Navbar.Brand>

        {/* Hamburger Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Nav Items */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <NavDropdown title="Home" id="home-dropdown" className='custom-hover-yellow'>
              <NavDropdown.Item href="#home/1">Section 1</NavDropdown.Item>
              <NavDropdown.Item href="#home/2">Section 2</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Pages" id="pages-dropdown" className='custom-hover-yellow'>
              <NavDropdown.Item href="#pages/1">Section 1</NavDropdown.Item>
              <NavDropdown.Item href="#pages/2">Section 2</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#tracking" className='custom-hover-yellow'>Tracking</Nav.Link>

            <NavDropdown title="Services" id="services-dropdown" className='custom-hover-yellow'>
              <NavDropdown.Item href="#services/1">Section 1</NavDropdown.Item>
              <NavDropdown.Item href="#services/2">Section 2</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="blog-dropdown" className='custom-hover-yellow'>
              <NavDropdown.Item href="#blog/1">Section 1</NavDropdown.Item>
              <NavDropdown.Item href="#blog/2">Section 2</NavDropdown.Item>
            </NavDropdown>

            {/* Buttons */}
            <Button
              variant="warning"
              className="px-4 py-2 fw-semibold text-white"
              style={{ borderRadius: '0', backgroundColor: '#fcb900' }}
            >
              Get a Quote
            </Button>
            <Button
              variant="dark"
              className="px-4 py-2 fw-semibold"
              style={{ borderRadius: '0' }}
            >
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;