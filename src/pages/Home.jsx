import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let abort = false;

    async function fetchJson(url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const ct = res.headers.get("content-type") || "";
      if (!ct.includes("application/json")) {
        const txt = await res.text();
        throw new Error(`Respuesta no-JSON (${ct}).\n${txt.slice(0,80)}…`);
      }
      return res.json();
    }

    (async () => {
      try {
        setLoading(true);
        setError("");
        const data = await fetchJson("http://localhost:5000/api/pizzas");
        setPizzas(Array.isArray(data) ? data : data.pizzas ?? []);
      } catch (e) {
        setError(e.message || "Error desconocido");
      } finally {
        if (!abort) setLoading(false);
      }
    })();

    return () => { abort = true; };
  }, []);

  if (loading) return <div className="container py-4">Cargando...</div>;
  if (error)   return <div className="container py-4 text-danger">Error: {error}</div>;

  return (
    <div className="container py-4">
      <h2 className="mb-4">Pizzas</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {pizzas.map((p) => (
          <div className="col" key={p.id}>
            <CardPizza
              id={p.id}
              name={p.name}
              price={p.price}
              img={p.img}
              ingredients={p.ingredients}
            />
          </div>
        ))}
      </div>
    </div>
  );
}