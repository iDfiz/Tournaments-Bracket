import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './components/js/animations';
import AnimatedBackground from "./components/bg"
import Menu from './components/Menu';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Designer from './pages/Designer';
import About from './pages/About';
import Footer from './components/Footer';
import './i18n';

function App() {
  return (
    <>
      <AnimatedBackground />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/Designer" element={<Designer />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;