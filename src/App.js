import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import Timer from "./pages/Timer";
import About from "./pages/About";
import TodoList from "./Todos/TodoList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/todo" element={<TodoList />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
