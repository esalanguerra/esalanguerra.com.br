// app/page.js
"use client";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Alan Guerra</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Início</Nav.Link>
              <NavDropdown title="Serviços" id="basic-nav-dropdown">
                <NavDropdown.Item href="#web-design">Web Design</NavDropdown.Item>
                <NavDropdown.Item href="#development">Desenvolvimento</NavDropdown.Item>
                <NavDropdown.Item href="#consulting">Consultoria</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#projects">Projetos</Nav.Link>
              <Nav.Link href="#contact">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <p>Este é um site de portfólio simples e profissional utilizando Next.js e Bootstrap 5.</p>
      </Container>
    </>
  );
}
