import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import Timer from "./Timer/Timer";
import About from "./pages/About";
import TodoList from "./Todos/TodoList";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/todo" element={<TodoList />} />
          <Route path="/" element={<Timer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
