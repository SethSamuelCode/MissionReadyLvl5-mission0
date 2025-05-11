import About from "./pages/About";
import Home from "./pages/Home";
import Test from "./pages/Test";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/test"
        element={<Test></Test>}
      />
      <Route
        path="/about"
        element={<About/>}
      />
    </Routes>
  );
}

export default App;
