import React from "react";
import { Link } from "react-router-dom";

export default function CardPizza({ id, name, price, ingredients, img }) {
  return (
    <div className="card col-md-4 m-3 p-0" style={{ maxWidth: 320 }}>
      <img
        src={img}
        className="card-img-top"
        alt={name}
        style={{ height: 170, objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text mb-1"><strong>Ingredientes:</strong></p>
        <ul>
          {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>
        <p><strong>Precio:</strong> ${price.toLocaleString("es-CL")}</p>

        <div className="d-flex justify-content-between mt-2">
          <Link to={`/pizza/${id}`} className="btn btn-primary">
            Ver más
          </Link>
          <button className="btn btn-success">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}