import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CardPizza({ id, name, price, ingredients = [], img }) {
  const { addToCart } = useCart();

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={img}
        className="card-img-top"
        alt={name}
        style={{ height: 180, objectFit: "cover" }}
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize">{name}</h5>

        <p className="card-text mb-1"><strong>Ingredientes:</strong></p>
        {ingredients.length ? (
          <ul className="mb-3">
            {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>
        ) : (
          <p className="text-muted mb-3">Sin ingredientes listados.</p>
        )}

        <p className="mt-auto mb-3">
          <strong>Precio:</strong> ${Number(price).toLocaleString("es-CL")}
        </p>

        <div className="d-flex gap-2">
          <Link to={`/pizza/${id}`} className="btn btn-outline-primary w-50">
            Ver más
          </Link>
          <button
            className="btn btn-success w-50"
            onClick={() => addToCart({ id, name, price, img })}
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
 