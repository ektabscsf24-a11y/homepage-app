import { Container, Row, Col, Button } from 'react-bootstrap'

function Hero() {
  return (
    <header id="top" className="kc-hero">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <h1 className="mb-4">Coffee roasted this week, at your door by Friday.</h1>
            <p className="lead mb-4">
              We roast in 5 kg batches in Karachi and ship within 48 hours, so every bag
              arrives while the beans are still at their best.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button size="lg" className="btn-saffron" variant="saffron">Start your first bag</Button>
              <Button size="lg" variant="outline-light">See this week&apos;s roasts</Button>
            </div>
          </Col>
          <Col lg={5}>
            <dl className="kc-hero-badge mb-0">
              <dt>48 hrs</dt>
              <dd>from roaster to your doorstep</dd>
              <dt>12</dt>
              <dd>single-origin farms we buy from directly</dd>
              <dt>5 kg</dt>
              <dd>maximum batch size, never more</dd>
            </dl>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Hero
