import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./conponents/pages/Home"
import Login from "./conponents/pages/Login"
import Register from "./conponents/pages/Register"
import DefaultHomepage from './conponents/pages/DefaultHomepage.jsx';

import './index.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={<DefaultHomepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>

  </StrictMode>,
)
