import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container nav-content">
        <Link to="/" className="nav-brand">
          <Sprout className="w-6 h-6" />
          Grow Your Own
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/guides" className="nav-link">Guides</Link>
          <Link to="/supplies" className="nav-link">Supplies</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;