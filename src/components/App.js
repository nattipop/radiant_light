import { Route, Routes } from 'react-router';
import '../styles/App.css';
import Mockup from './Mockup';
import PageNotFound from './PageNotFound';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';
import Services from './Services';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Mockup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/meet-the-stylist" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Portfolio />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
