import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from 'react-router-dom';
import "./styles/App.css";
import "./styles/index.css";
import App from "./components/App.jsx"
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import { Route, Routes } from 'react-router';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import Event from './components/Event.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Portfolio from './components/Portfolio.jsx';
import Services from './components/Services.jsx';
import Admin from './components/Admin.jsx';
import AdminPrivate from './components/AdminPrivate.jsx';
import NavSmall from './components/NavSmall.jsx';

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
