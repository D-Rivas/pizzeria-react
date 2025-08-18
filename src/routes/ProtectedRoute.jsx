import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

export default function ProtectedRoute() {
  const { token } = useUser();
  if (!token) return <Navigate to="/login" replace />;
  return <Outlet />;
}