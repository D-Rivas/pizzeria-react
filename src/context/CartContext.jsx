import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

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

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: (p.qty ?? 1) + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const inc = (id) =>
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: (p.qty ?? 1) + 1 } : p))
    );

  const dec = (id) =>
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, qty: Math.max((p.qty ?? 1) - 1, 0) } : p
        )
        .filter((p) => (p.qty ?? 0) > 0)
    );

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((p) => p.id !== id));

  const clearCart = () => setCart([]);

  const cartCount = useMemo(
    () => cart.reduce((acc, p) => acc + (p.qty ?? 1), 0),
    [cart]
  );
  const cartTotal = useMemo(
    () => cart.reduce((acc, p) => acc + (p.qty ?? 1) * Number(p.price || 0), 0),
    [cart]
  );

  const value = useMemo(
    () => ({ cart, addToCart, inc, dec, removeFromCart, clearCart, cartCount, cartTotal }),
    [cart, cartCount, cartTotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}