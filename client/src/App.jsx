import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '.pages/Home';
import Login from '.pages/Login';
import Register from '.pages/Register';
import Dashboard from '.pages/Dashboard';
import Header from '.components/Header';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>  
  );
}

export default App
