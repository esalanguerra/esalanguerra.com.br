"use client";

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import menu from './Menu';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Alan Guerra</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {menu.map((item, index) =>
              item.name === 'Serviços' ? (
                <NavDropdown key={index} title={item.name} id="basic-nav-dropdown">
                  {menu.filter(subItem => subItem.id !== 'home' && subItem.id !== 'projects' && subItem.id !== 'contact').map((subItem, subIndex) => (
                    <NavDropdown.Item key={subIndex} href={`#${subItem.id}`}>{subItem.name}</NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link key={index} href={`#${item.id}`}>{item.name}</Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavBar;
