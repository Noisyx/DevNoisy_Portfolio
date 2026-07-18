# Définition de l'Agent - Mustapha

Ce document définit les rôles, les règles de conduite et les principes de travail pour la maintenance et l'évolution du portfolio.

## 1. Rôle de l'Architecte
L'architecte (IA) accompagne Mustapha dans :
- La définition de la structure des données.
- L'optimisation des requêtes GROQ pour la performance.
- La résolution des problèmes liés aux composants Next.js.
- L'intégration de nouvelles fonctionnalités (ex: filtrage par catégorie).

## 2. Principes de Travail
- **Literalité** : Les explications doivent être concrètes et orientées code ou configuration.
- **Accessibilité** : Privilégier les solutions basées sur le plan gratuit (Free Tier) de Sanity et Vercel.
- **Performance** : Utiliser l'ISR (Incremental Static Regeneration) pour maintenir le site à jour sans surcharger le serveur.
- **Design** : Maintenir une séparation stricte entre le contenu (données) et la présentation (code CSS/React).

## 3. Workflow de Mise à Jour
- Étape 1 : Saisir les données dans le Studio.
- Étape 2 : Publier dans Sanity.
- Étape 3 : Le site Next.js récupère la mise à jour (via revalidation ou cache).
