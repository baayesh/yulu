import "./App.css";
// Components
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Contact from "./pages/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
