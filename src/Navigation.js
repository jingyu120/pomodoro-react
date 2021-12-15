import Nav from "react-bootstrap/Nav";
export default function Navigation() {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/todo">Todo</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/timer">Timer</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
