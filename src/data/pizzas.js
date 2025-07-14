import napolitana from '../assets/napolitana.jpg';
import hawaiana from '../assets/hawaiana.jpg';
import pepperoni from '../assets/pepperoni.jpg';
import vegetariana from '../assets/vegetariana.jpg';
import cuatroQuesos from '../assets/cuatro-quesos.jpg';
import salami from '../assets/salami.jpg';

export const pizzas = [
  {
    id: 1,
    name: "Napolitana",
    price: 5950,
    ingredients: ["queso Mozzarella", "tomates", "jamón", "orégano"],
    img: napolitana
  },
  {
    id: 2,
    name: "Hawaiana",
    price: 6950,
    ingredients: ["Jamón", "piña", "queso Mozzarella"],
    img: hawaiana
  },
  {
    id: 3,
    name: "Pepperoni",
    price: 6950,
    ingredients: ["queso Mozzarella", "pepperoni", "orégano"],
    img: pepperoni
  },
  {
    id: 4,
    name: "Vegetariana",
    price: 7490,
    ingredients: ["queso Mozzarella", "pimentón", "aceitunas", "champiñones"],
    img: vegetariana
  },
  {
    id: 5,
    name: "Cuatro Quesos",
    price: 7990,
    ingredients: ["queso Mozzarella", "parmesano", "gorgonzola", "queso Provolone"],
    img: cuatroQuesos
  },
  {
    id: 6,
    name: "Salami",
    price: 5990,
    ingredients: ["queso Mozzarella", "salami", "orégano"],
    img: salami
  },
];

export const pizzaCart = [
  { ...pizzas[0], quantity: 1 },
  { ...pizzas[1], quantity: 1 },
  { ...pizzas[2], quantity: 1 },
];