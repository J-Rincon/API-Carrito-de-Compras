import React, { useState, useEffect } from "react";
import Products from "../_components/Products";
import Cart from "../_components/Cart";

export default function ShopAppIndex() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], total: 0 });

  const fetchCart = async () => {
    const res = await fetch("/cart");
    const data = await res.json();
    setCart(data.cart);
  };

  useEffect(() => {
    const fetchProductsAndCart = async () => {
      const res = await fetch("/products");
      const data = await res.json();
      setProducts(data.products);
      await fetchCart();
    };
    fetchProductsAndCart();
  }, []);

  const handleAddToCart = async (productId) => {
    await fetch("/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product_id: productId })
    });
    await fetchCart();
  };

  return (
    <div>
      <Products products={products} onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
    </div>
  );
}