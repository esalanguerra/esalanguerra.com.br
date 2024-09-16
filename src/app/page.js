// app/page.js
"use client";
import { Container, Row, Col, Card, Carousel, ListGroup } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Perfil from './assets/eu.png'; // Certifique-se de que o caminho para a imagem está correto
import ContactSection from './components/ContactSection';

const eu = {
  nome: 'Alan Guerra',
  title: 'Engenheiro de Software',
  description: 'Com uma carreira em desenvolvimento de software iniciada em 2017, tenho ampla experiência em projetos web de grande escala que impactam milhões de usuários, utilizando tecnologias como .NET, JavaScript e TypeScript. Minha trajetória inclui contribuições significativas em projetos internacionais como voluntário, envolvendo o desenvolvimento de aplicações para o setor aeroportuário em Argentina, Moçambique e Estados Unidos.',
}

const techs = [
  {
    name: "Linguagens de Programação",
    items: ["C#", "TypeScript", "JavaScript"]
  },
  {
    name: "Frontend",
    items: ["ReactJS", "Angular", "Bootstrap", "Next.js", "Redux", "ViteJS"]
  },
  {
    name: "Backend",
    items: [".NET Framework", "ASP.NET", "Blazor", "ASP.NET MVC", "Nest.js", "Node.js", "Express", "Fastify"]
  },
  {
    name: "Computação em Nuvem",
    items: ["Firebase", "Supabase", "Microsoft Azure", "Vercel"]
  },
  {
    name: "Arquitetura de Software",
    items: ["Circuit Breaker", "Backend for Frontend (BFF)", "DDD", "Clean Architecture"]
  },
  {
    name: "DevOps",
    items: ["Docker", "Kubernetes", "Terraform", "Jenkins", "Azure DevOps", "AWS"]
  },
  {
    name: "Banco de Dados",
    items: ["PostgreSQL", "SQL Server", "MongoDB", "SQLite"]
  },
  {
    name: "Ferramentas de Monitoramento",
    items: ["Grafana", "Prometheus"]
  },
  {
    name: "Versionamento e CI/CD",
    items: ["Git", "GitLab", "GitHub", "Git Flow", "Linux", "Jenkins"]
  },
  {
    name: "Gateway de Pagamentos",
    items: ["Stripe", "PayPal", "Mercado Pago"]
  }
]

const TechnologyCarousel = () => {
  return (
    <Carousel indicators={false} controls={true} className="tech-carousel">
      {techs.map((tech, index) => (
        <Carousel.Item key={index}>
          <Container>
            <h3 className="text-center mb-4">{tech.name}</h3>
            <Row className="justify-content-center">
              <Col md={8}>
                <Card className="mb-3">
                  <Card.Body>
                    <ListGroup variant="flush">
                      {tech.items.map((item, index) => (
                        <ListGroup.Item key={index}>{item}</ListGroup.Item>
                      ))}
                    </ListGroup>
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
      <Navbar />

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

      <ContactSection />

      <section id="techs" className="py-5">
        <Container>
          <h2>Tecnologias</h2>
          <TechnologyCarousel />
        </Container>
      </section>
    </>
  );
}
