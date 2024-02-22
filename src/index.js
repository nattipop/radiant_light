import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from 'react-router-dom';
import "./styles/App.css";
import "./styles/index.css";
import App from "./components/App.js"
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import { Route, Routes } from 'react-router';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import Event from './components/Event.js';
import PageNotFound from './components/PageNotFound';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Admin from './components/Admin';
import AdminPrivate from './components/AdminPrivate';
import NavSmall from './components/NavSmall';
import Weddings from './components/Weddings';

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider store={store}>
    <BrowserRouter>
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
      <App />
    </BrowserRouter>
  </AuthProvider>
);
