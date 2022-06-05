import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Home /> */}
        </Route>
        <Route path="/login" element={<Login />}>
          {/* <Login /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
