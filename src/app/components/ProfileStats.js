import { Container, Row, Col, Card } from 'react-bootstrap';
import eu from './Eu';

const ProfileStats = () => {
  return (
    <section id="profile-stats" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Perfil Profissional</h2>
        <Row className="text-center">
          <Col md={3} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{eu.projects}</Card.Title>
                <Card.Text>Projetos</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{eu.courses}</Card.Title>
                <Card.Text>Cursos</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{eu.expYears}</Card.Title>
                <Card.Text>Anos de Experiência</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{eu.certifications}</Card.Title>
                <Card.Text>Certificados</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProfileStats;
