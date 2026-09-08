import { getProductBySlug, getProducts } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";

// ISR : revalidation toutes les 30 secondes
export const revalidate = 30;

// Génère les routes connues au build ; les autres sont générées à la demande (fallback ISR)
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Produit non trouvé" };

  return {
    title: `${product.name} - NexShop ISR`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const buildTime = new Date().toISOString();

  return (
    <main>
      <Link href="/">← Retour aux produits</Link>
      <p className="badge">
        🔄 Dernier rendu : {new Date(buildTime).toLocaleTimeString("fr-FR")} — Revalidation ISR
        toutes les 30s
      </p>

      <div className="product-detail">
        <img src={product.image} alt={product.name} />
        <div className="content">
          <span className="category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="price">{product.price} €</p>
          <p>{product.description}</p>

          <h3>Caractéristiques</h3>
          <ul>
            {product.features.map((feature) => (
              <li key={feature}>✔ {feature}</li>
            ))}
          </ul>

          <p>
            Note : ⭐ {product.rating}/5 · Stock : {product.stock} unités
          </p>
        </div>
      </div>
    </main>
  );
}
