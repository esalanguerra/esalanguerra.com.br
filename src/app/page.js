// app/page.js
"use client";
import { Container, Navbar, Nav, NavDropdown, Row, Col, Card } from 'react-bootstrap';

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
      
      <section id="home">
        <Container className="mt-5">
          <h1>Bem-vindo ao Meu Portfólio</h1>
          <p>Este é um site de portfólio simples e profissional utilizando Next.js e Bootstrap 5.</p>
        </Container>
      </section>

      <section id="web-design" className="bg-light py-5">
        <Container>
          <h2>Serviços de Web Design</h2>
          <p>Oferecemos soluções criativas e personalizadas para a criação e desenvolvimento de websites.</p>
        </Container>
      </section>

      <section id="development" className="py-5">
        <Container>
          <h2>Desenvolvimento</h2>
          <p>Desenvolvemos soluções tecnológicas robustas e escaláveis para atender às suas necessidades de negócios.</p>
        </Container>
      </section>

      <section id="consulting" className="bg-light py-5">
        <Container>
          <h2>Consultoria</h2>
          <p>Oferecemos consultoria especializada para ajudar você a alcançar seus objetivos de negócios com eficiência.</p>
        </Container>
      </section>

      <section id="projects" className="py-5">
        <Container>
          <h2>Projetos</h2>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Projeto 1</Card.Title>
                  <Card.Text>Descrição do Projeto 1.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Projeto 2</Card.Title>
                  <Card.Text>Descrição do Projeto 2.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Projeto 3</Card.Title>
                  <Card.Text>Descrição do Projeto 3.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className="bg-light py-5">
        <Container>
          <h2>Contato</h2>
          <p>Entre em contato conosco através do formulário abaixo ou envie um e-mail para contato@exemplo.com.</p>
          {/* Adicione um formulário de contato aqui */}
        </Container>
      </section>
    </>
  );
}
