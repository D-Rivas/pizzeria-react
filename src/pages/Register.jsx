import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Register() {
  const { register } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await register(email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container py-3">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
        <input
          className="form-control"
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="form-control"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-danger">{error}</p>}
        <button className="btn btn-success" type="submit">
          Crear cuenta
        </button>
      </form>
    </div>
  );
}