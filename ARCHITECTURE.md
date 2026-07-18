# Architecture du Portfolio - Mustapha

Ce document décrit l'architecture technique du projet, conçue pour être modulaire, évolutive et maintenable, utilisant une approche "Content-as-Data" (Headless).

## 1. Stack Technologique
- **Frontend** : Next.js (App Router, Server Components).
- **Headless CMS** : Sanity.io (Gestion des données).
- **Déploiement** : Vercel.
- **Styling** : Tailwind CSS / CSS Modules (via template MotionSite).

## 2. Flux de Données (Data Flow)
1.  **Backend (Sanity Studio)** : Interface de saisie pour l'utilisateur. Les données sont structurées selon des schémas (type `skill`, type `project`).
2.  **API (Sanity Content Lake)** : Expose les données via l'API Sanity.
3.  **Frontend (Next.js)** : Récupération des données via `client.fetch`.
4.  **Rendu** : Le site génère les composants (Server Components) à partir des données fetched.

## 3. Structure des Schémas (Content Model)
- **Project** : `name`, `slug`, `description`, `techStack`, `link`, `image`, `date`.
- **Skill** : `name`, `order`, `level`, `category`, `icon`.

## 4. Stratégie de Maintenance
- **Indépendance** : Le code source est immuable. Les changements de contenu se font exclusivement via l'interface du Studio.
- **Réutilisation** : Composants génériques (`SkillCard`, `ProjectCard`) mappés dynamiquement sur les données.
