import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
      style={{ backgroundColor: "#fffbe6" }}
    >
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">¡Página no encontrada! 😱</h2>
      <p className="mb-4" style={{ maxWidth: "500px" }}>
        ¡Ups! La pizza que buscas se quemó en el horno 🔥🍕<br />
        O tal vez fue devorada por un repartidor hambriento 🚴‍♂️💨
      </p>
      <Link to="/" className="btn btn-warning btn-lg shadow">
        🔙 Volver al inicio
      </Link>
    </div>
  );
}