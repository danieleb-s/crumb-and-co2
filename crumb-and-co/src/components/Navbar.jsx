import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // true when the menu is open on small screens
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Crumb &amp; Co. Bakery</h2>

      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        Menu
      </button>

      <div className={menuOpen ? "links show" : "links"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Our Bakes</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
