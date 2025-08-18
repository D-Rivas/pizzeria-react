import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

export default function PublicOnlyRoute() {
  const { token } = useUser();
  if (token) return <Navigate to="/" replace />;
  return <Outlet />;
}