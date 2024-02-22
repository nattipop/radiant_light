import { Route, Routes } from 'react-router';
import '../styles/App.css';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import Event from './Event';
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
import NavSmall from './NavSmall';
import { Link } from 'react-router-dom';
import Weddings from './Weddings';
import axios, { Axios } from 'axios';

axios.interceptors.response.use((error) => {
  if (Axios.isCancel(error)) {
    return console.log(error);
  }
});

function App() {
  return (
    <div className="App">
      <Nav />
      <Link to="/navigate"><img src="https://res.cloudinary.com/dawteptkh/image/upload/v1707089842/settings_wtplpv.png" alt="" id="hamburger-dropdown" /></Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eventId" element={<Event />} />
        <Route path="/navigate" element={<NavSmall />} />
        <Route path="/meet-the-stylist" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Portfolio />} />
        <Route path="/gallery/:category" element={<Weddings />} />
        <Route path="/admin" element={<Admin />} />
        <Route element={<AuthOutlet fallbackPath='/admin' />}>
          <Route path='/admin-private/*' element={<AdminPrivate/>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
