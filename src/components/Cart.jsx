import React, { useState } from "react";
import { pizzaCart } from "../data/pizzas";

export default function Cart() {
  const [cart, setCart] = useState([...pizzaCart]);

  
  const updateQuantity = (id, delta) => {
    setCart(cart =>
      cart
        .map(pizza =>
          pizza.id === id
            ? { ...pizza, quantity: Math.max(0, pizza.quantity + delta) }
            : pizza
        )
        .filter(pizza => pizza.quantity > 0)
    );
  };

 
  const total = cart.reduce(
    (sum, pizza) => sum + pizza.price * pizza.quantity,
    0
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: 32,
          borderRadius: 20,
          minWidth: 350,
          boxShadow: "0 4px 24px #0002",
        }}
      >
        <h2>Detalles del pedido:</h2>
        {cart.map((pizza) => (
          <div key={pizza.id} style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
            <img src={pizza.img} alt={pizza.name} width={60} style={{ marginRight: 12, borderRadius: 8 }} />
            <div style={{ flex: 1 }}>
              <strong>{pizza.name}</strong> <span> ${pizza.price.toLocaleString("es-CL")}</span>
            </div>
            <button
              onClick={() => updateQuantity(pizza.id, -1)}
              style={{
                border: "1.5px solid #e00",
                color: "#e00",
                background: "none",
                borderRadius: 5,
                margin: "0 3px",
                width: 30,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              -
            </button>
            <span style={{ minWidth: 18, textAlign: "center" }}>{pizza.quantity}</span>
            <button
              onClick={() => updateQuantity(pizza.id, 1)}
              style={{
                border: "1.5px solid #339af0",
                color: "#339af0",
                background: "none",
                borderRadius: 5,
                margin: "0 3px",
                width: 30,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>
        ))}
        <hr />
        <h3>
          Total: <span style={{ color: "#218838" }}>${total.toLocaleString("es-CL")}</span>
        </h3>
        <button
          style={{
            width: "100%",
            padding: 10,
            background: "#218838",
            color: "#fff",
            border: "none",
            fontWeight: "bold",
            borderRadius: 8,
            marginTop: 8,
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          Pagar
        </button>
      </div>
    </div>
  );
}