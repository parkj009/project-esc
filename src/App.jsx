// Components
import Header from "./components/ui/Header";
// import Footer from "./components/ui/footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Tutorial from "./pages/Tutorial";
import Rankings from "./pages/Rankings";
import RoomList from "./pages/RoomList";
import Room from "./pages/Room";
import NotFound from "./pages/NotFound";

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
        <Route path="/rooms">
          <Route index element={<RoomList />} />
          <Route path=":id" element={<Room />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
