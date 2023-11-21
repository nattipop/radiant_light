import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './styles/index.css';
// import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import Placeholder from './components/Placeholder.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Placeholder />
  </BrowserRouter>
);
