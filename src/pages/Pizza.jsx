import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerPizza = async () => {
      try {
        const respuesta = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!respuesta.ok) throw new Error("Pizza no encontrada");
        const data = await respuesta.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar pizza:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerPizza();
  }, [id]);

  if (loading) return <p className="text-center mt-5">Cargando pizza...</p>;

  if (!pizza)
    return <p className="text-center mt-5 text-danger">Pizza no encontrada</p>;

  return (
    <main className="container my-5">
      <div className="card mx-auto" style={{ maxWidth: 500 }}>
        <img
          src={pizza.img}
          className="card-img-top"
          alt={pizza.name}
          style={{ height: 250, objectFit: "cover" }}
        />
        <div className="card-body">
          <h3 className="card-title">{pizza.name}</h3>
          <p className="card-text">{pizza.desc}</p>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <h4 className="mt-3 text-success">
            Precio: ${pizza.price.toLocaleString("es-CL")}
          </h4>
        </div>
      </div>
    </main>
  );
}