import { Navbar as BsNavbar, Nav, Container, Button } from 'react-bootstrap'

function Navbar() {
  return (
    <BsNavbar expand="md" variant="dark" className="kc-navbar" sticky="top">
      <Container>
        <BsNavbar.Brand href="#top">Kettle &amp; Co.</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="main-nav" />
        <BsNavbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-md-center gap-md-2">
            <Nav.Link href="#top">Home</Nav.Link>
            <Nav.Link href="#features">Why Kettle</Nav.Link>
            <Nav.Link href="#features">Subscriptions</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
            <Button variant="saffron" size="sm" className="ms-md-2 btn-saffron">Shop beans</Button>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}

export default Navbar
