# README

## Shop API – Carrito (Rails API)

### Requisitos
- Ruby >= 3.1, Rails >= 7.2

### Instalación
```bash
bundle install
bin/rails s
```

### Endpoints
- `GET /products` → `{ products: [...] }`
- `POST /cart` (param `product_id`) → `{ cart: { items: [...], total: N } }`
- `GET /cart` → `{ cart: { items: [...], total: N } }`

### Notas
- Carrito en memoria global (CartStore).
- CORS abierto en dev.

## Combinación Óptima de Productos

### Solución
Se utiliza el algoritmo Backtracking con poda:

Este explora todas las combinaciones posibles de productos usando recursión, descarta combinaciones que exceden el presupuesto (poda) y guarda la mejor combinación encontrada.