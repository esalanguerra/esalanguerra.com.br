// app/page.js
"use client";
import { Container, Navbar, Nav, NavDropdown, Row, Col, Card, Carousel } from 'react-bootstrap';
import Image from 'next/image';
import Perfil from './assets/eu.png'; // Certifique-se de que o caminho para a imagem está correto

const eu = {
  nome: 'Alan Guerra',
  title: 'Engenheiro de Software',
  description: 'Com uma carreira em desenvolvimento de software iniciada em 2017, tenho ampla experiência em projetos web de grande escala que impactam milhões de usuários, utilizando tecnologias como .NET, JavaScript e TypeScript. Minha trajetória inclui contribuições significativas em projetos internacionais como voluntário, envolvendo o desenvolvimento de aplicações para o setor aeroportuário em Argentina, Moçambique e Estados Unidos.',
}

const menu = [
  { id: 'home', name: 'Início' },
  { id: 'development', name: 'Desenvolvimento' },
  { id: 'consulting', name: 'Consultoria' },
  { id: 'projects', name: 'Projetos' },
  { id: 'contact', name: 'Contato' },
  { id: 'techs', name: 'Tecnologias' },
]

const techs = {
  framework: ["React", "Angular", "Nest.js", "Express", "Fastify", "ASP.NET Core", "Flask"],
  lang: ["JavaScript", "TypeScript", "Python", "C#", "SQL"],
  db: ["MongoDB", "PostgreSQL", "SQL Server"],
  tool: ["Git", "Docker", "Postman"],
  devops: ["Terraform", "Ansible", "Kong", "Kong Gateway", "Kubernetes", "Jenkins", "Grafana", "Prometheus"],
  cloud: ["AWS", "Azure", "Vercel", "Hostinger", "Render", "Heroku"],
  aws: ["EC2", "S3", "RDS", "Lambda", "API Gateway", "Amplify", "Cognito"],
  ui: ["Tailwindcss", "Bootstrap", "material-ui", "Native Base"],
  architecture: ["Microservices", "Serverless", "RESTful", "GraphQL"],
  testing: ["Jest", "Supertest", "Selenium", "Auto Cannon", "Cypress"],
  other: ["HTML", "CSS", "SASS"],
}

const TechnologyCarousel = () => {
  return (
    <Carousel indicators={false} controls={true} className="tech-carousel">
      {Object.entries(techs).map(([category, items]) => (
        <Carousel.Item key={category}>
          <Container>
            <h3 className="text-center mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <Row className="justify-content-center">
              <Col md={8}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Text>
                      {items.join(', ')}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default function Home() {
  return (
    <>
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

      <section id="home" className="text-center py-5">
        <Container>
          <div className="d-flex justify-content-center mb-4">
            <Image
              src={Perfil}
              alt="Minha Foto"
              width={300}
              height={300}
              className="rounded-circle"
            />
          </div>
          <h1 className="mt-4">Olá, eu sou {eu.nome}</h1>
          <h2>{eu.title}</h2>
          <p>{eu.description}</p>
        </Container>
      </section>

      <section id="development" className="py-5">
        <Container>
          <h2>Desenvolvimento Web</h2>
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

      <section id="techs" className="py-5">
        <Container>
          <h2>Tecnologias</h2>
          <TechnologyCarousel />
        </Container>
      </section>
    </>
  );
}
