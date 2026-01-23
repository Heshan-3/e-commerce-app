import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3 text-center mt-auto">
            <Container>
                <Row>
                    <Col>
                        <p>&copy; 2026 Sport Shop. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;