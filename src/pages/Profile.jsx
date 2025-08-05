import { useNavigate } from "react-router-dom";

const Profile = () => {
  const userEmail = "usuario@correo.com";
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Sesión cerrada ✅");
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card text-center shadow p-5" style={{ maxWidth: "500px" }}>
        <h2 className="mb-4">👤 Perfil del Usuario</h2>
        <p className="mb-3">
          Correo electrónico: <strong>{userEmail}</strong>
        </p>
        <button className="btn btn-danger mt-2" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;