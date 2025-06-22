import React from 'react';
import { formatCurrency } from '../utils/format';

export default function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Pizza {name}</h5>

          <h6>Ingredientes:</h6>
          <ul className="flex-grow-1">
            {ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>

          <p className="mt-3 mb-2">
            <strong>Precio: ${formatCurrency(price)}</strong>
          </p>

          <div className="mt-auto d-flex">
            <button className="btn btn-outline-secondary me-2">Ver Más</button>
            <button className="btn btn-primary">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
}