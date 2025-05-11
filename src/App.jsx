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
    </Routes>
  );
}

export default App;
