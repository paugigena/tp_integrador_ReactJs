import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand as={Link} to="/">Libreria</Navbar.Brand> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/alta">Alta</Nav.Link>
          <Nav.Link as={Link} to="/login">Loguearse</Nav.Link>
          
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/producto/alta">Alta</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/producto/listado">Listado</NavDropdown.Item>           
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>
);
  };



export default NavBar;
