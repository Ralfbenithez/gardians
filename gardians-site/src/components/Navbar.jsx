import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">Gardian's Assistance</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Accueil</Link>
          <Link to="/about" className="hover:text-gray-300">À Propos</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
