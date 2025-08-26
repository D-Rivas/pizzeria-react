import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { cart } = useCart();
  const { token, logout } = useUser();

  const totalItems = cart.reduce((sum, item) => sum + (item.qty ?? 1), 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.qty ?? 1),
    0
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4 py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link to="/" className="navbar-brand fs-3 fw-bold text-danger">
          🍕 Pizzería Mamma Mía
        </Link>

        {/* Info del carrito */}
        <div className="d-flex align-items-center gap-3">
          <Link to="/cart" className="btn btn-outline-dark">
            <i className="bi bi-cart-fill me-1"></i>
            Total ({totalItems}) — ${totalPrice.toLocaleString("es-CL")}
          </Link>

          {/* Botones según estado */}
          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline-primary">
                Perfil
              </Link>
              <button onClick={logout} className="btn btn-danger">
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-primary">
                Acceso
              </Link>
              <Link to="/register" className="btn btn-primary">
                Registro
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
