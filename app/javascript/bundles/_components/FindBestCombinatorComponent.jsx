import React, { useState } from "react";

const products = [
  { id: 1, name: "Producto 1", price: 60 },
  { id: 2, name: "Producto 2", price: 100 },
  { id: 3, name: "Producto 3", price: 120 },
  { id: 4, name: "Producto 4", price: 70 }
];

function findBestCombination(products, budget) {
  let bestCombo = [];
  let bestSum = 0;

  function backtrack(start, currentCombo, currentSum) {
    if (currentSum > budget) return;

    if (currentSum > bestSum) {
      bestSum = currentSum;
      bestCombo = [...currentCombo];
    }

    for (let i = start; i < products.length; i++) {
      backtrack(
        i + 1,
        [...currentCombo, products[i]],
        currentSum + products[i].price
      );
    }
  }

  backtrack(0, [], 0);
  return bestCombo;
}

export default function FindBestCombinatorComponent () {
  const [selected, setSelected] = useState([]);
  const [budget, setBudget] = useState(150);

  const handleFind = () => {
    const best = findBestCombination(products, budget);
    setSelected(best);
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h2>Combinación Óptima de Productos</h2>

      <h3>Listado de productos</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
      <div>
        <label>Presupuesto: </label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
        <button onClick={handleFind}>Buscar</button>
      </div>
      <h3>Productos Seleccionados:</h3>
      <ul>
        {selected.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
      <p>
        Total: $
        {selected.reduce((sum, p) => sum + p.price, 0)}
      </p>
    </div>
  );
}