// Components
import Header from "./components/ui/Header";
// import Footer from "./components/ui/footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Tutorial from "./pages/Tutorial";
import Rankings from "./pages/Rankings";

// External package imports
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
