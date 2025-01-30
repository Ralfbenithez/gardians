import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Gardians</h1>
      <ul className="flex gap-4">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/team">Nos gardiens</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
