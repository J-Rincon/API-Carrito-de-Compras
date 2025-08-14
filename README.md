# README

# Shop API – Carrito (Rails API)

## Requisitos
- Ruby >= 3.1, Rails >= 7.2

## Instalación
```bash
bundle install
bin/rails s
```

## Endpoints
- `GET /products` → `{ products: [...] }`
- `POST /cart` (param `product_id`) → `{ cart: { items: [...], total: N } }`
- `GET /cart` → `{ cart: { items: [...], total: N } }`

## Notas
- Carrito en memoria global (CartStore).
- CORS abierto en dev.