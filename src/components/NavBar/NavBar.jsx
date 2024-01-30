import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary miNavBar">
            <Container>
                <Navbar.Brand href="#home" className='logo'>Tiaga Club</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto miNav">
                        <Nav.Link href="/" className='text-white'>Inicio</Nav.Link>
                        <Nav.Link href="/nosotros" className='text-white'>Sobre Nosotros</Nav.Link>
                        <NavDropdown title="Colección" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/category/1">Remeras</NavDropdown.Item>
                            <NavDropdown.Item href="/category/2">
                                Pantalones
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/category/3">Polleras</NavDropdown.Item>
                            <NavDropdown.Item href="/category/4">Accesorios</NavDropdown.Item>
                            <NavDropdown.Item href="/category/5">Buzos</NavDropdown.Item>
                            <NavDropdown.Item href="/category/6">Sacos</NavDropdown.Item>
                            <NavDropdown.Item href="/category/7">Bikinis</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                SALE
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget/>
        </Navbar>
    );
}

export default BasicExample;