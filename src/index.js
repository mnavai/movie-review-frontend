import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Home from './components/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

