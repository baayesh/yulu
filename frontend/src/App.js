import "./App.css";
// Components
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
