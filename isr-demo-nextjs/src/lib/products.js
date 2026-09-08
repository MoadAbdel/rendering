import { fetchAPI } from "./api";

export async function getProducts() {
  try {
    // Les données viennent de L'API, pas du code
    return await fetchAPI("/products");
  } catch {
    return []; // API indisponible → liste vide
  }
}

export async function getProductBySlug(slug) {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) || null;
}
