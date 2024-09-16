import techs from "./leads/Techs";
import { Row, Carousel, Container, Card, ListGroup, Col } from "react-bootstrap";
import "../css/Carousel.css";

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

export default TechnologyCarousel;
