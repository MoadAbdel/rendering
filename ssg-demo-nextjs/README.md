# ssg-demo-nextjs — NexShop

Démo de Static Site Generation (SSG) avec Next.js 16 (App Router).

## Installation

```
npm install
```

## Build (génère les pages statiques)

```
npm run build
```

## Lancer l'application

```
npm start
```

Rendez-vous sur http://localhost:3000

## Ce qu'il faut retenir

- Les données (`src/lib/products.js`, `src/lib/users.js`) sont importées directement dans les pages, pas de fetch au runtime.
- `generateStaticParams()` génère les URLs de chaque page produit/utilisateur au moment du build.
- Toutes les pages sont pré-rendues en HTML statique — testez avec Lighthouse : Performance et SEO 95-100.
