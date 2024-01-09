import { Route, Routes } from 'react-router';
import '../styles/App.css';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import Mockup from './Mockup';
import PageNotFound from './PageNotFound';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';
import Services from './Services';
import Footer from './Footer';
import Admin from './Admin';
import AdminPrivate from './AdminPrivate';

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
        <Route path="/admin" element={<Admin />} />
        <Route element={<AuthOutlet fallbackPath='/admin' />}>
          <Route path='/admin-private' element={<AdminPrivate/>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
