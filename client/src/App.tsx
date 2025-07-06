import Navbar from './components/Navbar'
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import PrivateOrginizations from './pages/PrivateOrginizations';
import HealthCare from './pages/HealthCare';
import Education from './pages/Education';

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/PrivateOrginizations" element={<PrivateOrginizations />} />
        <Route path="/HealthCare" element={<HealthCare />} />
        <Route path="/Education" element={<Education />} />
      </Routes>
      <Footer hideButton={location.pathname=="/Contact"}/>
    </>
  );
}

export default App
