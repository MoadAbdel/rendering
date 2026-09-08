import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "NexShop - Démo SSG",
  description: "Démonstration de Static Site Generation avec Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <header className="site-header">
          <strong>🛍️ NexShop</strong>
          <nav>
            <Link href="/">Produits</Link>
            <Link href="/users">Utilisateurs</Link>
          </nav>
        </header>
        {children}
        <footer className="footer">
          NexShop - Démonstration SSG avec Next.js © 2026
          <br />
          ⚡ Toutes les pages sont générées statiquement (SSG)
        </footer>
      </body>
    </html>
  );
}
