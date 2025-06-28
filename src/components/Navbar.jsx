export default function Navbar({ setPage }) {
  const token = false; // Cambia para simular usuario logueado
  const total = 25000;

  return (
    <nav className="navbar navbar-dark bg-dark px-3 w-100" style={{ width: "100vw", margin: 0, borderRadius: 0 }}>
      <span className="navbar-brand">Pizzería Mamma Mia!</span>
      <div className="d-flex align-items-center">
        <button className="btn btn-warning me-2" onClick={() => setPage('home')}>🍕 Inicio</button>
        {token ? (
          <>
            <button className="btn btn-warning me-2" onClick={() => setPage('profile')}>🔓 Profile</button>
            <button className="btn btn-warning" onClick={() => setPage('logout')}>🔒 logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-warning me-2" onClick={() => setPage('login')}>🔐 Login</button>
            <button className="btn btn-warning" onClick={() => setPage('register')}>🔐 Register</button>
          </>
        )}
      </div>
      <button className="btn btn-info ms-auto">
        🛒 Total: ${total.toLocaleString('es-CL')}
      </button>
    </nav>
  );
}