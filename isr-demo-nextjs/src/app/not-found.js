import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404 — Page non trouvée</h1>
      <p>
        <Link href="/">← Retour à l'accueil</Link>
      </p>
    </main>
  );
}
