import React from "react";

export default function Products({ products, onAddToCart }) {
  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button onClick={() => onAddToCart(p.id)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}