import projects from "./Projects";
import { Row, Col, Card, Container } from "react-bootstrap";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="section-title text-center mb-4">Projetos</h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col md={4} key={index} className="d-flex justify-content-center mb-4">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title className="card-title">{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-between align-items-center">
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
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectSection;
