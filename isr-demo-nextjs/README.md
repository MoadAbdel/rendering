# isr-demo-nextjs — NexShop ISR

Démo d'Incremental Static Regeneration (ISR) avec Next.js 16.

## Installation

```
npm install
```

## Lancer le projet (2 terminaux)

```
# Terminal 1 : API (JSON Server, port 3001)
npm run json-server

# Terminal 2 : Next.js
npm run build && npm start
```

Rendez-vous sur http://localhost:3000

## Tester l'ISR en direct

1. Notez l'heure affichée dans le badge "Dernier rendu" de la page d'accueil.
2. Modifiez un produit via l'API :
   ```
   curl -X PATCH http://localhost:3001/products/1 \
     -H "Content-Type: application/json" \
     -d '{"price": 499.99}'
   ```
3. Rechargez immédiatement : le prix n'a pas changé (ancienne version encore en cache).
4. Attendez ~30 secondes puis rechargez à nouveau : le nouveau prix apparaît, la page a été régénérée en arrière-plan.

## Ce qu'il faut retenir

- `export const revalidate = 30` régénère la page toutes les 30 secondes maximum.
- Les données viennent d'une vraie API (JSON Server) via `fetchAPI()`, pas d'un import statique comme en SSG.
- `npm run generate-db` régénère `src/data/db.json` (source servie par JSON Server) à partir de `scripts/generate-db.js`.
