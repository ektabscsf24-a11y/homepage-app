import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Features() {
  return (
    <section id="features" className="kc-features">
      <Container>
        <h2 className="display-6 fw-bold mb-2">Better coffee, with less to think about</h2>
        <p className="mb-5 col-lg-6 px-0">Three things we do differently from the supermarket shelf.</p>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="p-4">
                <div className="card-img-icon mb-3" aria-hidden="true">🔥</div>
                <Card.Title as="h3">Roasted to order</Card.Title>
                <Card.Text>
                  Nothing sits in a warehouse. Your beans are roasted after you order
                  and packed the same day.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="p-4">
                <div className="card-img-icon mb-3" aria-hidden="true">🌱</div>
                <Card.Title as="h3">Traceable farms</Card.Title>
                <Card.Text>
                  Every bag lists the farm, the altitude and the harvest date, so you
                  know exactly what you are drinking.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="p-4">
                <div className="card-img-icon mb-3" aria-hidden="true">📦</div>
                <Card.Title as="h3">Flexible delivery</Card.Title>
                <Card.Text>
                  Choose weekly, fortnightly or monthly. Skip, pause or cancel any time
                  before the roast date.
                </Card.Text>
                <Button variant="link" className="p-0 fw-semibold">Compare plans</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
