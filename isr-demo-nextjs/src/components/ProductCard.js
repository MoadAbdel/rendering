import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <img src={product.image} alt={product.name} />
      <span className="category-tag">{product.category}</span>
      <h2>{product.name}</h2>
      <p>{product.price} €</p>
      <span>⭐ {product.rating}/5</span>
    </Link>
  );
}
