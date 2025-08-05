import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">Pizzería Mamma Mia!</span>
      <div className="d-flex gap-2">
        <Link to="/" className="btn btn-warning">🍕 Home</Link>
        <Link to="/login" className="btn btn-warning">🔒 Login</Link>
        <Link to="/register" className="btn btn-warning">🔒 Sign up</Link>
        <Link to="/cart" className="btn btn-info">🛒 Total: $25.000</Link>
      </div>
    </nav>
  );
}


 