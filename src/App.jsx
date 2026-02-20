import Home from "./conponents/pages/Home"
import Login from "./conponents/pages/Login"
import Register from "./conponents/pages/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      
    
      
    
    </>
  )
}

export default App
