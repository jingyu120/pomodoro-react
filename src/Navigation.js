import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="nav-container">
      <ul>
      <li>
        <Link to="/">About</Link>
      </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          {" "}
          <Link to="/timer"> Pomodoro</Link>
        </li>
      </ul>
    </div>
    // <Nav variant="pills" defaultActiveKey="/home">
    //   <Nav.Item>
    //     <Nav.Link href="/todo">Todo</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link href="/">Timer</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link href="/about">About</Nav.Link>
    //   </Nav.Item>
    // </Nav>
  );
}
