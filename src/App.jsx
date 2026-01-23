import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './components/js/animations';
import Menu from './components/Menu';
import Home from './pages/Home';
import './i18n';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;