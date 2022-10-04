// Components
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
// import Room from "./components/Room";
import RoomLayout from "./components/Roomlayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Tutorial from "./pages/Tutorial";
import Rankings from "./pages/Rankings";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import RoomList from "./pages/rooms/RoomList";
import NotFound from "./pages/NotFound";

// Rooms
import PirateRoom from "./pages/rooms/PirateRoom";

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms">
          <Route index element={<RoomList />} />
          <Route path="/rooms/pirateroom" element={<PirateRoom />} />
          <Route path=":id" element={<RoomLayout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
