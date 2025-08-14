import React from "react";

export default function Cart({ cart }) {
  return (
    <div>
      <h2>Carrito</h2>
      {cart.items.length === 0 ? (
        <p>Carrito vacío</p>
      ) : (
        <ul>
          {cart.items.map((p, idx) => (
            <li key={`${p.id}-${idx}`}>{p.name} - ${p.price}</li>
          ))}
        </ul>
      )}
      <p><strong>Total:</strong> ${cart.total}</p>
    </div>
  );
}