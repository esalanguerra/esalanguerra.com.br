import projects from "./Projects";
import { Row, Col, Card, Container } from "react-bootstrap";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Projetos</h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col md={4} key={index} className="d-flex justify-content-center mb-4">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Footer>
                    <small className="text-muted">
                      <div className="d-flex justify-content-between">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                          Visitar Site
                        </a>
                        <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                          Repositório GitHub
                        </a>
                      </div>
                      <div className="mt-2">
                        <small>Tecnologias: {project.techs.join(', ')}</small>
                      </div>
                    </small>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectSection;
