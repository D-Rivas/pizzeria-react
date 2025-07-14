import React from "react";
import { pizzas } from "../data/pizzas";
import CardPizza from "./CardPizza";

export default function Home() {
  return (
    <main className="container-fluid my-5">
      <div className="row justify-content-center gx-4 gy-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
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
