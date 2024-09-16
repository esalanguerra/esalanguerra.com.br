import { Container } from "react-bootstrap";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-light py-5">
      <Container>
        <h2>Contato</h2>
        <p>Entre em contato conosco através do formulário abaixo ou envie um e-mail para contato@exemplo.com.</p>
        {/* Adicione um formulário de contato aqui */}
      </Container>
    </section>
  )
};

export default ContactSection;
