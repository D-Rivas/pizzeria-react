import { createContext, useContext, useMemo, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
 
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (pizza) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === pizza.id);
      if (found) {
        return prev.map((p) =>
          p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...pizza, quantity: 1 }];
    });
  };

  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: Math.max(0, p.quantity + delta) } : p))
        .filter((p) => p.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  const { total, count } = useMemo(() => {
    const t = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
    const c = cart.reduce((sum, p) => sum + p.quantity, 0);
    return { total: t, count: c };
  }, [cart]);

  const value = {
    cart,
    addToCart,
    changeQty,
    removeFromCart,
    clearCart,
    total,
    count,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
