import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "NexShop ISR - Tous nos produits",
  description: "Découvrez notre sélection de produits high-tech",
};

// ISR : revalidation toutes les 30 secondes
export const revalidate = 30;

// Page ISR : async car on fetch l'API
export default async function HomePage() {
  const products = await getProducts();
  const buildTime = new Date().toISOString();
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <main>
      <div className="badge">
        🔄 Dernier rendu : {new Date(buildTime).toLocaleTimeString("fr-FR")} — Revalidation en
        arrière-plan toutes les 30 secondes
      </div>

      <div className="categories">
        {categories.map((cat) => (
          <span key={cat}>{cat}</span>
        ))}
      </div>

      <div className="products-grid">
        {products.map((product) => (
          // Même affichage que le SSG, mais les données PEUVENT changer !
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
