import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { total, count } = useCart();

  return (
    <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between">
      <Link className="navbar-brand text-decoration-none text-light" to="/">Pizzería Mamma Mia!</Link>

      <div className="d-flex gap-2">
        <Link to="/" className="btn btn-warning">Home</Link>
        <Link to="/login" className="btn btn-warning">Log in</Link>
        <Link to="/register" className="btn btn-warning">Sign up</Link>
        <Link to="/profile" className="btn btn-outline-light">Profile</Link>
        <Link to="/cart" className="btn btn-info">
          🛒 ({count}) Total: ${total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
}



 