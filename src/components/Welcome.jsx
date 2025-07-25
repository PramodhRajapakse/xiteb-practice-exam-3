import { Container, Row, Col, Button } from 'react-bootstrap';
import "../styles/WelcomeSection.css";

const Welcome = () => {
  return (
    <div className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="position-relative mb-4 mb-md-0">
            <div className="position-relative w-100" style={{ maxWidth: '250px' }}>
              <img
                src="/src/assets/welcome-section-1.jpg"
                alt="Main"
                className="img-fluid rounded shadow"
              />
              <img
                src="/src/assets/welcome-section-2.jpg"
                alt="Overlay"
                className="img-fluid position-absolute smaller-img"
              />
              <div className="position-absolute client-box text-white fw-bold text-center" style={{ backgroundColor: '#fa7e4d' }}>
                <h3>15,350+</h3>
                <h4>Clients Worldwide</h4>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <h2 className="mb-3 fw-bold" style={{ fontSize: '2.5rem' }}>
              TransMax Logistics<br/> Around
              <span style={{ color: '#fa7e4d' }}> the World</span>
            </h2>
            <p className="mb-4" style={{ fontSize: '1.25rem' }}>
              We provide world-class logistics, transportation, and delivery
              services. With a growing network of international clients, we
              ensure efficiency and safety in every shipment.
            </p>
            <p className="text-muted mb-4" style={{ fontSize: '1.25rem' }}>
              Our worth added administrations guarantee the progression
              of products proceeds consistently and supply chains stay lean and
              streamlined for progress.
            </p>
            <Button variant="secondary" className="px-4 py-2 rounded-0 fw-semibold" style={{ fontSize: '1.1rem' }}>
              More About Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
