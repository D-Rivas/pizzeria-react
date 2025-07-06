export default function Navbar() {
  const token = false; // Cambia para simular usuario logueado
  const total = 25000;

  return (
    <nav className="navbar navbar-dark bg-dark px-3 w-100" style={{ width: "100vw", margin: 0, borderRadius: 0 }}>
      <span className="navbar-brand">Pizzería Mamma Mia!</span>
      <div className="d-flex align-items-center">
        <button className="btn btn-warning me-2">🍕 Inicio</button>
        {token ? (
          <>
            <button className="btn btn-warning me-2">🔓 Profile</button>
            <button className="btn btn-warning">🔒 logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-warning me-2">🔐 Login</button>
            <button className="btn btn-warning">🔐 Register</button>
          </>
        )}
      </div>
      <button className="btn btn-info ms-auto">
        🛒 Total: ${total.toLocaleString('es-CL')}
      </button>
    </nav>
  );
}