import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext();

// Proveedor del contexto
export function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  // Intentar cargar datos del localStorage si el usuario ya había iniciado sesión
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedEmail = localStorage.getItem("email");

    if (savedToken && savedEmail) {
      setToken(savedToken);
      setEmail(savedEmail);
    }
  }, []);

  // Guardar token y email en localStorage al iniciar sesión
  const login = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Error al iniciar sesión");
    }

    const data = await res.json();
    setToken(data.token);
    setEmail(data.email);

  
    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);
  };

  const register = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Error al registrarse");
    }

    const data = await res.json();
    setToken(data.token);
    setEmail(data.email);

    
    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const getProfile = async () => {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("No se pudo obtener el perfil");
    }

    return await res.json(); 
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser debe usarse dentro de <UserProvider>");
  return ctx;
}