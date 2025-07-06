import React, { useState } from 'react';
import { pizzaCart } from '../data/pizzas';

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

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

   const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);
   
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "87vh" }}>
      <div className="cart-container w-100" style={{
        maxWidth: 420,
        background: '#fff',
        borderRadius: 16,
        padding: 24,
        boxShadow: '0 2px 20px #eee'
      }}>
        <h4 className="mb-4">Detalles del pedido:</h4>
        {cart.map(pizza => (
          <div key={pizza.id} className="d-flex align-items-center mb-3">
            <img src={pizza.img} alt={pizza.name} width={60} height={60} className="rounded me-2" />
            <div className="flex-grow-1">
              <div className="fw-semibold">{pizza.name}</div>
              <span className="text-muted">${pizza.price.toLocaleString('es-CL')}</span>
            </div>
            <div className="d-flex align-items-center ms-3">
              <button className="btn btn-outline-danger btn-sm px-2 me-1" onClick={() => updateQuantity(pizza.id, -1)}>-</button>
              <span style={{ width: 24, display: 'inline-block', textAlign: 'center' }}>{pizza.quantity}</span>
              <button className="btn btn-outline-primary btn-sm px-2 ms-1" onClick={() => updateQuantity(pizza.id, 1)}>+</button>
            </div>
          </div>
        ))}
        <hr />
        <h5>
          Total: <span className="text-success">${total.toLocaleString('es-CL')}</span>
        </h5>
        <button className="btn btn-success w-100 mt-3 py-2 fw-bold">Pagar</button>
      </div>
    </div>
  );
}