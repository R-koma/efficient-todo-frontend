import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import TodoPage from "./components/todo/TodoPage";
import Complete from "./components/complete/Complete";
import ReviewPage from "./components/review/ReviewPage";

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
