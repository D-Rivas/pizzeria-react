import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Profile() {
  const { email, token, logout, getProfile } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      getProfile(); 
    }
  }, [token, getProfile, navigate]);

  return (
    <section className="container py-4">
      <h2>Perfil de Usuario</h2>
      <p className="lead">Bienvenido, <strong>{email}</strong></p>
      <button onClick={logout} className="btn btn-danger mt-3">
        Cerrar sesión
      </button>
    </section>
  );
}