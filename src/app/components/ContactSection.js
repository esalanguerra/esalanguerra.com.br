import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github, Instagram, Twitter, Newspaper } from 'react-bootstrap-icons';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-light py-5">
      <Container>
        <h2>Contato</h2>
        <p>Entre em contato conosco através do formulário abaixo ou envie um e-mail para contato@exemplo.com.</p>
        
        {/* Adicionando ícones de redes sociais */}
        <Row className="text-center mt-4">
          <Col>
            <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="text-dark">
              <Linkedin size={24} className="mx-2" />
            </a>
            <a href="https://github.com/seu-perfil" target="_blank" rel="noopener noreferrer" className="text-dark">
              <Github size={24} className="mx-2" />
            </a>
            <a href="https://www.instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer" className="text-dark">
              <Instagram size={24} className="mx-2" />
            </a>
            <a href="https://twitter.com/seu-perfil" target="_blank" rel="noopener noreferrer" className="text-dark">
              <Twitter size={24} className="mx-2" />
            </a>
            <a href="https://tabnews.com.br/seu-perfil" target="_blank" rel="noopener noreferrer" className="text-dark">
              <Newspaper size={24} className="mx-2" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default ContactSection;
