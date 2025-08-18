import { useUser } from "../context/UserContext.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { token } = useUser();
  const { cart, inc, dec, removeFromCart, clearCart, cartTotal } = useCart();

  return (
    <section className="container py-4">
      <h2 className="mb-3">Carrito</h2>

      {cart.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Producto</th>
                <th style={{width: 120}}>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((p) => (
                <tr key={p.id}>
                  <td className="d-flex align-items-center gap-2">
                    <img src={p.img} alt={p.name} width={56} height={40} style={{objectFit: "cover"}}/>
                    <span className="text-capitalize">{p.name}</span>
                  </td>
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-outline-secondary" onClick={() => dec(p.id)}>-</button>
                      <span className="btn btn-light">{p.qty ?? 1}</span>
                      <button className="btn btn-outline-secondary" onClick={() => inc(p.id)}>+</button>
                    </div>
                  </td>
                  <td>${Number(p.price).toLocaleString("es-CL")}</td>
                  <td>${(Number(p.price) * (p.qty ?? 1)).toLocaleString("es-CL")}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(p.id)}>
                      Quitar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="text-end fw-bold">Total:</td>
                <td className="fw-bold">${cartTotal.toLocaleString("es-CL")}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}

      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-outline-secondary" onClick={clearCart} disabled={cart.length === 0}>
          Vaciar
        </button>
        <button className="btn btn-success" disabled={!token || cart.length === 0}
          title={!token ? "Debes iniciar sesión para pagar" : "Pagar ahora"}>
          Pagar
        </button>
      </div>
      {!token && <p className="text-danger mt-2">Debes iniciar sesión para pagar.</p>}
    </section>
  );
}