import React from 'react';
import { formatCurrency } from '../utils/format';

export default function Navbar() {
  const token = false;
  const total = 25000;

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg py-2">
      <div className="container">
        <span className="navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav me-auto">
            <button className="btn btn-outline-light btn-sm me-2">🍕 Home</button>
            {token ? (
              <>
                <button className="btn btn-outline-light btn-sm me-2">🔓 Profile</button>
                <button className="btn btn-outline-light btn-sm me-2">🔒 Logout</button>
              </>
            ) : (
              <>
                <button className="btn btn-outline-light btn-sm me-2">🔐 Login</button>
                <button className="btn btn-outline-light btn-sm me-2">🔐 Register</button>
              </>
            )}
          </div>

          <div className="d-flex">
            <button className="btn btn-info btn-sm">
              🛒 Total: ${formatCurrency(total)}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}