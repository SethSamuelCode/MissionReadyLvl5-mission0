import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
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
        path="/about"
        element={<About />}
      />
      <Route
        path="/contact-us"
        element={<Contact />}
      />
      <Route
        path="*"
        element={<Page404 />}
      />
    </Routes>
  );
}

export default App;
