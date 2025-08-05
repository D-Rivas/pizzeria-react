 
import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const obtenerPizzas = async () => {
      try {
        const respuesta = await fetch("http://localhost:5000/api/pizzas");
        const data = await respuesta.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al cargar pizzas:", error);
      }
    };

    obtenerPizzas();
  }, []);

  return (
    <main className="container my-5">
      <h2>Pizzas</h2>
      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </main>
  );
}
