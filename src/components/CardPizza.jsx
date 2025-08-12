import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CardPizza({ id, name, price, ingredients, img }) {
  const { addToCart } = useCart();

  return (
    <div className="card col-md-4 m-3 p-0" style={{ maxWidth: 320 }}>
      <img src={img} className="card-img-top" alt={name} style={{ height: 170, objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <p className="card-text mb-1"><strong>Ingredientes:</strong></p>
        <ul>
          {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>

        <p className="mb-3"><strong>Precio:</strong> ${price.toLocaleString("es-CL")}</p>

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
