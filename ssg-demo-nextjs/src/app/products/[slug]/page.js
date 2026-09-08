import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";

// SSG - Génère les pages statiques pour chaque produit
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// SSG - génère les balises <meta> pour le SEO (référencement) de chaque page produit
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Produit non trouvé" };

  return {
    title: `${product.name} - NexShop`,
    description: product.description,
  };
}

// SSG - Page détail produit générée statiquement au build
export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const buildTime = new Date().toISOString();

  return (
    <main>
      <Link href="/">← Retour aux produits</Link>
      <p className="badge">⚡ Page statique SSG — Générée au build le {buildTime}</p>

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
