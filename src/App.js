import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import Todo from "./Todo";

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}
function App() {
  return (
    <>
      <Nav />
      <Todo />
      <Footer year={new Date().getFullYear()} />
    </>
  );
}

export default App;
