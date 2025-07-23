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
              <div className="position-absolute client-box bg-warning text-white fw-bold text-center">
                15,350+<br />clients worldwide
              </div>
            </div>
          </Col>

          <Col md={6}>
            <h2 className="mb-3 fw-bold">Welcome to CargoTon</h2>
            <p className="text-muted mb-4">
              We provide world-class logistics, transportation, and delivery
              services. With a growing network of international clients, we
              ensure efficiency and safety in every shipment.
            </p>
            <Button variant="dark" className="px-4 py-2 rounded-0 fw-semibold">
              More About Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
