import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Catalogue from './pages/Catalogue';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/register">Register</Link> | <Link to="/login">Login</Link> | <Link to="/catalogue">Catalogue</Link> | <Link to="/cart">Cart</Link> | <Link to="/contact">Contact</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to E-Commerce</h1>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
