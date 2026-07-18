# Roadmap : Portfolio Dynamique avec Next.js & Sanity

Cette feuille de route détaille les étapes pour construire ton portfolio évolutif. L'objectif est de séparer le code de la source de contenu afin que tu puisses ajouter des compétences sans jamais modifier le code source.

## Phase 1 : Initialisation & Configuration
- [x] **Installation de Sanity Studio** : 
    - Exécuter `npm create sanity@latest`.
    - Configurer le projet et le dataset.
- [x] **Modélisation des données (Schema)** :
    - Créer le schéma `skill.js` (Nom, Niveau, Catégorie, Icône).
    - Créer le schéma `project.js` (Nom, Description, Tech Stack, Lien, Image).
- [x] **Lien API** :
    - Installer `next-sanity` dans ton projet Next.js.
    - Configurer les variables d'environnement (`SANITY_PROJECT_ID`, `SANITY_DATASET`).

## Phase 2 : Développement du Frontend (Next.js)
- [x] **Architecture des Composants** :
    - Créer un composant `SkillCard.tsx` générique pour afficher les compétences.
    - Créer un composant `ProjectCard.tsx` pour tes réalisations.
- [x] **Fetch des données (Server Components)** :
    - Utiliser `client.fetch` pour récupérer les données depuis Sanity.
- [x] **Affichage dynamique** :
    - Mapper les données reçues de Sanity vers tes composants.

## Phase 3 : Automatisation & Optimisation
- [x] **Configuration de l'ISR (Incremental Static Regeneration)** :
    - Configurer `revalidate` dans tes pages pour que le site se mette à jour sans re-build total.
- [ ] **Déploiement** :
    - Pousser le code sur GitHub.
    - Connecter le dépôt à Vercel.
    - Configurer les variables d'environnement sur Vercel.

## Phase 4 : Maintenance & Évolution
- [ ] **Utilisation du Studio** :
    - Accéder à `localhost:3333` (ou l'URL de production) pour ajouter des compétences.
    - Publier et vérifier la mise à jour immédiate sur le portfolio.
