import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

export default function Register() {
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula registro + login
    login();
    navigate("/");
  };

  return (
    <div className="container py-3">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input className="form-control" placeholder="email" />
        <input className="form-control" placeholder="password" type="password" />
        <button className="btn btn-success" type="submit">Crear cuenta</button>
      </form>
    </div>
  );
}