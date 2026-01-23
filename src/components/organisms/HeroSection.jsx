import { Container, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div
      className="position-relative overflow-hidden d-flex align-items-center"
      style={{
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        height: "400px",
      }}
    >
      <Container className="text-center text-white">
        <h1 className="display-4 fw-bold">Welcome to Sport Shop 🏆</h1>
        <p className="lead mt-3">
          Premium sports gear for champions.
        </p>
        <Button variant="light" size="lg" className="mt-4">
          Shop Now
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;
