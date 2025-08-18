import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { cart } = useCart();
  const { token, logout } = useUser();

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4 py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo o Nombre */}
        <Link to="/" className="navbar-brand fs-3 fw-bold text-danger">
          🍕 Pizzería Mamma Mía
        </Link>

        {/* Info del carrito */}
        <div className="d-flex align-items-center gap-3">
          <Link
            to="/cart"
            className="badge bg-secondary px-3 py-2 fs-6 d-flex align-items-center gap-2 text-decoration-none"
          >
            <i className="bi bi-cart-fill"></i>
            Total ({totalItems}) — ${Number(totalPrice || 0).toLocaleString("es-CL")}
          </Link>

          {/* Botones dependiendo del token */}
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