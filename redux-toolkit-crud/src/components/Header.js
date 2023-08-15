import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container">
        <Link to="/" className="navbar-brand">My App</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/authors" className="nav-link">Authors</Link>
            </li>
            <li className="nav-item">
              <Link to="/books" className="nav-link">Books</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;