import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let abort = false;

    (async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const ct = res.headers.get("content-type") || "";
        if (!ct.includes("application/json")) {
          const txt = await res.text();
          throw new Error(`Respuesta no-JSON (${ct}). ${txt.slice(0,80)}…`);
        }
        const data = await res.json();
        if (!abort) setPizza(data);
      } catch (e) {
        if (!abort) setError(e.message || "Error desconocido");
      } finally {
        if (!abort) setLoading(false);
      }
    })();

    return () => { abort = true; };
  }, [id]);

  if (loading) return <p className="m-3">Cargando...</p>;
  if (error)   return <p className="m-3 text-danger">Error: {error}</p>;
  if (!pizza)  return <p className="m-3">No se encontró la pizza.</p>;

  return (
    <article className="container py-3">
      <div className="row">
        <div className="col-md-5">
          <img src={pizza.img} alt={pizza.name} className="img-fluid rounded" loading="lazy" />
        </div>
        <div className="col-md-7">
          <h1 className="mb-2 text-capitalize">{pizza.name}</h1>
          <p className="text-muted">{pizza.desc}</p>
          <h5 className="mt-3">Ingredientes:</h5>
          {pizza.ingredients?.length ? (
            <ul>{pizza.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}</ul>
          ) : <p className="text-muted">Sin ingredientes listados.</p>}
          <p className="fs-5 mt-3"><strong>Precio:</strong> ${Number(pizza.price).toLocaleString("es-CL")}</p>
        </div>
      </div>
    </article>
  );
}