import { Container, Row, Col } from "react-bootstrap";
import links from "./Links";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-light py-5">
      <Container>
        <h2>Contato</h2>
        <p>Entre em contato conosco através do formulário abaixo ou envie um e-mail para contato@exemplo.com.</p>
        <Row className="text-center mt-4">
          <Col>
            {links.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className="text-dark mx-2"
              >
                {link.icon}
              </a>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default ContactSection;
