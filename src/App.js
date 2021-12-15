import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import Todo from "./pages/Todo";
import Timer from "./pages/Timer";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
