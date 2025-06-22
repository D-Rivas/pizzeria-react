import React from 'react';
import bgImage from '../assets/Header.jpg';

export default function Header() {
  return (
    <header
      className="text-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '6rem 1rem 4rem',
        marginBottom: '1.5rem'  
      }}
    >
      <h1>¡Pizzería Mamma Mia!</h1>
      <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
}