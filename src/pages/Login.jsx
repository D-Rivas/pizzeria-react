import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

export default function Login() {
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();       // simula login → token=true
    navigate("/"); // redirige al home
  };

  return (
    <div className="container py-3">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input className="form-control" placeholder="email" />
        <input className="form-control" placeholder="password" type="password" />
        <button className="btn btn-primary" type="submit">Ingresar</button>
      </form>
    </div>
  );
}