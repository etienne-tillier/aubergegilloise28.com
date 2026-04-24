# Brief de génération de site (niche-starter)

Ce fichier est auto-généré depuis Website Manager.
L'agent doit lire d'abord `AGENTS.md`, puis ce fichier.
⚠️ Ce fichier est la source de vérité du brief: ne pas l'écraser avec un template générique.

---

## 1) Infos projet

- `site_name`: aubergegilloise28.com
- `site_domain`: aubergegilloise28.com
- `site_url`: https://aubergegilloise28.com
- `default_locale`: fr-FR
- `site_id` (UUID Supabase): 9319707e-e8df-4da7-bc2b-76506903a802
- `tier` (`tier1` / `tier2`): tier2

## 2) Positionnement éditorial

- Thématique: Restauration, Tourisme, Hebergement
- Audience cible:
- Objectif business:
- Ton éditorial:
- Angles à privilégier:
- Angles interdits:

## 3) Arborescence souhaitée

- Pages de navigation (hors blog):
- Sections homepage attendues:
- CTA principal:
- CTA secondaire:

## 4) Contraintes SEO

- Requêtes principales:
- Entités importantes:
- Concurrents de référence:
- Règles de maillage interne spécifiques:
- URLs legacy à rediriger (si applicable):
  - (aucune)
  - Si l'URL contient des caractères encodés (`%C3%A9`, etc.), la décoder d'abord puis slugifier proprement (ne jamais produire des slugs de type `c3a9`/`c3a8`).

## 5) Direction artistique

- Univers visuel:
- Inspirations:
- Couleurs souhaitées / évitées:
- Style typographique:
- Niveau d'animation:
- Niveau de sobriété (1-10):

## 6) Assets (R2 / médias)

- Bucket/source:
- Liste images hero:
- Liste images sections:
- Liste images guides/blog:
- Contraintes de ratio/poids:

## 7) Contraintes techniques

- Le code doit respecter strictement les règles de `AGENTS.md`.
- Ne pas modifier les fichiers Core interdits.
- Pas de `select("*")` ajouté.
- Pas de faux articles.
- Aucune page 404.
- Toute page additionnelle liée (outil, carte, simulateur, etc.) doit être implémentée et réellement remplie.
- Si une page n'existe pas, aucun lien ne doit pointer vers elle.
- Tout lien vers le même domaine doit être traité comme lien interne dofollow.
- Les redirections legacy doivent pointer vers des slugs décodés/normalisés (jamais vers des slugs encodés type `c3a9`).
- `npm run build` doit passer.

## 8) Données légales à injecter

- Mentions légales (éditeur):
- Contact public:
- DPO/contact RGPD:
- Hébergeur:

---

## 9) Données source Website Manager

### Brief éditorial brut

Donc l'idée du site c'est de faire un site spécialisé dans le département du 28 donc dans l'heure et l'oire où ça parle des auberges, des hôtels, du tourisme, des activités, de quoi faire là-bas, qu'est-ce qui c'est, quels sont les meilleures choses à faire, quels sont les indispensables, les choses à savoir avant de venir, les bons plans, quoi manger, les spécialités locales, les lieux à visiter, les meilleurs endroits où dormir ou manger, quelles activités, ça je l'ai déjà dit, voilà tout ce que tu dois savoir avant de venir dans l'heure et l'oire en terme pour faire du tourisme.

### Description générée

# AubergeGilloise28.com - Guide Touristique de l'Eure-et-Loir (28)

**AubergeGilloise28.com** est un site spécialisé dans le tourisme du département de l'Eure-et-Loir (28), conçu comme un guide complet pour découvrir cette région authentique du Centre-Val de Loire. Le site s'adresse aux touristes français et internationaux souhaitant explorer les richesses patrimoniales, gastronomiques et naturelles de ce territoire méconnu, situé aux portes de l'Île-de-France.

## Objectif et Public Cible

Le site vise à positionner l'Eure-et-Loir comme une destination touristique de choix en proposant un contenu éditorial riche : guides pratiques, sélections d'hébergements (auberges, hôtels, chambres d'hôtes), recommandations gastronomiques, itinéraires de visite et conseils d'initiés. Le public cible inclut les couples en escapade, familles en weekend, et touristes culturels cherchant une alternative authentique aux destinations saturées. La monétisation s'appuie sur l'affiliation avec des plateformes de réservation d'hébergements et restaurants, ainsi que la génération de leads pour les professionnels du tourisme local.

## Contenu et Positionnement

Le site développe une expertise locale approfondie à travers des articles de blog, des guides thématiques (châteaux, gastronomie, nature, événements), des comparatifs d'hébergements et des fiches pratiques. L'accent est mis sur l'authenticité, la découverte de trésors cachés et les conseils personnalisés pour optimiser son séjour dans le département.

### Prompt IA généré

Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu touristique.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- Nom du projet : AubergeGilloise28.com
- Domaine : aubergegilloise28.com
- Type de site : Site de contenu touristique / money site
- Thématiques : Restauration, Tourisme, Hébergement
- Objectif business : Affiliation hébergements/restaurants + génération de leads locaux
- Audience cible : Touristes français/internationaux, couples, familles, tourisme culturel

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs** décrivant l'ambiance : Authentique, Chaleureux, Raffiné, Paisible, Accueillant
- **Références visuelles mentales** : Châteaux de la Loire, campagne française vallonnée, auberges traditionnelles en pierre, champs de blé dorés, forêts de Rambouillet, architecture vernaculaire, jardins à la française, gastronomie du terroir
- **Émotions à évoquer** : Sérénité, découverte, gourmandise, authenticité, évasion bucolique, raffinement discret

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers visuel ci-dessus, l'agent développeur devra :
1. Identifier les couleurs naturellement associées à ces références (tons de pierre calcaire, vert forêt, ocre des champs, bleu ardoise des toitures)
2. Créer une palette UNIQUE avec :
   - Couleur principale (primary) : inspirée des pierres de tuffeau de la région
   - Couleur secondaire (secondary) : évoquant les forêts et bocages
   - Couleur d'accent (accent) : rappelant les blés dorés ou les tuiles anciennes
   - Couleur de fond (background) : ton crème naturel
   - Variante hover : version plus soutenue de la couleur principale
3. Assurer un contraste suffisant pour l'accessibilité

### Typographie
- Proposer une Google Font adaptée à l'univers :
  - Titre principal : Libre Baskerville ou Playfair Display (élégance patrimoniale)
  - Corps de texte : Source Sans Pro ou Nunito Sans (lisibilité moderne)
  - Accents : Crimson Text (caractère artisanal)

## 2. SEO & métadonnées
- **Titre SEO principal** : "Eure-et-Loir (28) : Guide Tourisme, Hébergements & Restaurants"
- **Méta-description principale** : "Découvrez l'Eure-et-Loir : châteaux, auberges authentiques, gastronomie locale. Guide complet hébergements, restaurants et activités dans le 28."
- **Open Graph title** : "AubergeGilloise28 - Votre Guide Touristique de l'Eure-et-Loir"
- **Open Graph description** : "Explorez les trésors cachés de l'Eure-et-Loir : châteaux, gastronomie, hébergements de charme. Conseils d'experts pour un séjour réussi."

## 3. Rôle du template
- Le projet part d'un template Next.js existant
- Fichiers à mettre à jour :
  - `config/site.ts` (name, description, domain, navigation)
  - `app/globals.css` (créer la palette UNIQUE selon méthodologie section 1)
  - contenus de démo dans `content/data/*` et MDX
  - configuration blog Supabase (`SITE_DOMAIN`, routes `/avis/*`, etc.)

## 4. Contenu & structure à mettre en place
- Types de contenus à garder : blog, comparatifs hébergements, guides thématiques, pages statiques
- **Sections obligatoires sur la page d'accueil** (/) :
  - Hero : "Découvrez l'Eure-et-Loir Authentique" avec image de château emblématique (https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/aubergegilloise28-com-home-hero-chateau-maintenon.jpeg)
  - Section "Hébergements de Charme" avec sélection d'auberges (https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/aubergegilloise28-com-home-hebergements-auberge-pierre.jpeg)
  - Section "Gastronomie Locale" présentant spécialités du terroir (https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/aubergegilloise28-com-home-gastronomie-terroir-assiette.jpeg)
  - Section "Que Faire" avec activités et sites incontournables (https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/aubergegilloise28-com-home-activites-foret-rambouillet.jpeg)
  - Section "Nos Derniers Articles" avec blog
  - Bloc de confiance "Recommandé par les locaux"
- Pages importantes : `/hebergements`, `/restaurants`, `/que-faire`, `/blog`, `/guides`
- Clusters thématiques : Châteaux et patrimoine, Gastronomie du terroir, Nature et randonnées, Événements culturels

## 5. Images pré-générées - À TÉLÉCHARGER ET INTÉGRER

**IMPORTANT** : Les images suivantes sont pré-générées et disponibles sur le bucket R2. Tu DOIS les télécharger et les intégrer dans le projet :

- Image hero : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/aubergegilloise28-com-home-hero-chateau-maintenon.jpeg
- Hébergements : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/aubergegilloise28-com-home-hebergements-auberge-pierre.jpeg
- Gastronomie : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/aubergegilloise28-com-home-gastronomie-terroir-assiette.jpeg
- Activités : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/aubergegilloise28-com-home-activites-foret-rambouillet.jpeg
- Guides page : https://pub-3c1bead77fc84e5d93e219fe1a5fb51f.r2.dev/aubergegilloise28-com-guides-hero-campagne-eure-loir.jpeg
- Restaurants page : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/aubergegilloise28-com-restaurants-hero-bistrot-chartres.jpeg
- Hébergements page : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/aubergegilloise28-com-hebergements-hero-manoir-perche.jpeg
- Card château : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/aubergegilloise28-com-home-destinations-chateau-anet.jpeg

## 6. Consignes éditoriales
- Ton à respecter : Expert local passionné, chaleureux mais informatif, éviter le marketing excessif
- Types d'articles attendus : Guides pratiques ("Que faire à Chartres en 2 jours"), comparatifs hébergements ("Top 10 des auberges de charme"), focus gastronomie ("Spécialités culinaires de l'Eure-et-Loir"), bons plans locaux
- Contraintes à éviter : Promesses touristiques exagérées, comparaisons défavorables avec Paris/Loire, généralités sans valeur ajoutée

## 7. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN="aubergegilloise28.com", BLOG_API_SECRET)
- Mise à jour `config/site.ts` avec navigation : Accueil, Hébergements, Restaurants, Que faire, Guides, Blog
- **Création de la palette UNIQUE** dans `app/globals.css` selon méthodologie
- Logos adaptés au thème patrimonial (`/public/logo.svg`, `/app/icon.svg`)
- Intégration blog Supabase (filtrage par domaine)
- **Téléchargement et intégration des 8 images pré-générées**
- Vérifier `npm run lint` et `npm run build`
- Configuration déploiement

## 8. Anti-patterns à éviter
❌ Commencer à coder avant d'avoir créé le design system
❌ Copier-coller des couleurs d'un exemple existant
❌ Utiliser les mêmes polices que d'autres sites
❌ Créer un design "générique"
❌ Laisser des placeholders de couleurs dans le code final
❌ Oublier de télécharger et intégrer les images pré-générées
❌ Utiliser un style trop parisien ou urbain pour cette thématique rurale
