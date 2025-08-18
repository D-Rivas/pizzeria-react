import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Pizza from "./pages/Pizza.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import PublicOnlyRoute from "./routes/PublicOnlyRoute.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/cart" element={<Cart />} />

        {/* RUTA PROTEGIDA: /profile */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* LOGIN/REGISTER solo si NO hay token */}
        <Route element={<PublicOnlyRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="*" element={<h2 className="m-3">404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}