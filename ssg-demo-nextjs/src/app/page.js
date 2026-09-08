import { products } from "@/lib/products";
import Link from "next/link";

export const metadata = {
  title: "NexShop - Tous nos produits",
};

export default function HomePage() {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <main>
      <h1>🛍️ Bienvenue sur NexShop</h1>
      <p className="badge">⚡ Page statique SSG — Générée au build</p>
      <p>Catégories : {categories.join(", ")}</p>

      <div className="products-grid">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price} €</p>
            <span>⭐ {product.rating}/5</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
