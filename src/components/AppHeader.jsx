import { Container, Nav, Navbar } from "react-bootstrap";

const AppHeader = () => {
  return (
    <header className="fixed-top">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Counter App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default AppHeader;
