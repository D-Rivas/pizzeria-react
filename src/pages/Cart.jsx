import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, changeQty, removeFromCart, clearCart, total } = useCart();

  if (!cart.length) {
    return (
      <div className="container my-5 text-center">
        <h3>Tu carrito está vacío 🛒</h3>
      </div>
    );
  }

  return (
    <div className="container my-5" style={{ maxWidth: 800 }}>
      <h4 className="mb-4">Detalles del pedido</h4>

      {cart.map((p) => (
        <div key={p.id} className="d-flex align-items-center justify-content-between border rounded p-2 mb-2">
          <div className="d-flex align-items-center" style={{ gap: 12 }}>
            <img src={p.img} alt={p.name} width={60} height={60} style={{ objectFit: "cover", borderRadius: 8 }} />
            <div>
              <strong>{p.name}</strong>
              <div>${p.price.toLocaleString("es-CL")} c/u</div>
            </div>
          </div>

          <div className="d-flex align-items-center" style={{ gap: 8 }}>
            <button className="btn btn-outline-danger btn-sm" onClick={() => changeQty(p.id, -1)}>-</button>
            <span style={{ minWidth: 24, textAlign: "center" }}>{p.quantity}</span>
            <button className="btn btn-outline-primary btn-sm" onClick={() => changeQty(p.id, 1)}>+</button>
            <button className="btn btn-outline-secondary btn-sm" onClick={() => removeFromCart(p.id)}>Eliminar</button>
          </div>
        </div>
      ))}

      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <h4>Total: <span className="text-success">${total.toLocaleString("es-CL")}</span></h4>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary" onClick={clearCart}>Vaciar</button>
          <button className="btn btn-success">Pagar</button>
        </div>
      </div>
    </div>
  );
}
