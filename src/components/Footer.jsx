import { Container, Row, Col, Nav } from 'react-bootstrap'

function Footer() {
  return (
    <footer id="footer" className="kc-footer">
      <Container>
        <Row className="gy-4">
          <Col md={6}>
            <h2 className="h5 text-white mb-2">Kettle &amp; Co.</h2>
            <p className="mb-0">Small-batch coffee roasters, Karachi.</p>
          </Col>
          <Col md={6}>
            <Nav className="justify-content-md-end gap-3">
              <Nav.Link href="#top" className="p-0">About</Nav.Link>
              <Nav.Link href="#features" className="p-0">Wholesale</Nav.Link>
              <Nav.Link href="#footer" className="p-0">Shipping</Nav.Link>
              <Nav.Link href="#footer" className="p-0">Contact</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <hr className="my-4 border-secondary" />
        <p className="small mb-0">&copy; 2026 Kettle &amp; Co. All rights reserved.</p>
      </Container>
    </footer>
  )
}

export default Footer
