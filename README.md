# InnovateTech RH - Système de Gestion des Employés

> **Plateforme de gestion RH moderne et complète développée avec React + Redux Toolkit + Tailwind CSS**



## 📋 Table des Matières

- [À Propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies Utilisées](#-technologies-utilisées)
- [Installation](#-installation)
- [Démarrage](#-démarrage)
- [Structure du Projet](#-structure-du-projet)
- [API & Endpoints](#-api--endpoints)
- [Comptes de Démonstration](#-comptes-de-démonstration)
- [Guide d'Utilisation](#-guide-dutilisation)


## 🎯 À Propos

**InnovateTech RH** est une application web moderne de gestion des ressources humaines conçue pour simplifier et optimiser la gestion des employés dans une entreprise. L'application offre une interface intuitive, des fonctionnalités complètes de CRUD (Create, Read, Update, Delete), des statistiques en temps réel, et des outils d'export de données.

### Objectifs du Projet

- Centraliser la gestion des informations des employés
- Fournir des statistiques et analyses visuelles
- Automatiser les calculs d'ancienneté et de métriques RH
- Offrir une expérience utilisateur moderne et responsive
- Garantir la sécurité des données avec un système d'authentification

## ✨ Fonctionnalités

### 🔐 Authentification & Sécurité
- **Système d'authentification sécurisé** avec Redux Toolkit
- **Protection des routes** - Accès restreint aux pages protégées
- **Gestion de session** avec localStorage
- **Page de transition** animée après connexion
- **Déconnexion sécurisée** avec nettoyage des données

### 📊 Dashboard Interactif
- **Statistiques en temps réel** :
  - Nombre total d'employés
  - Masse salariale totale
  - Salaire moyen
  - Anniversaires d'embauche du mois
- **Graphiques interactifs** (préparés pour activation) :
  - Répartition par département (graphique en donut)
  - Évolution des embauches par année (graphique en aires)
- **Cartes statistiques** avec icônes et tendances
- **Section anniversaires** avec affichage des employés concernés

### 👥 Gestion des Employés (CRUD Complet)

#### Liste des Employés
- **Affichage en tableau** avec toutes les informations essentielles
- **Recherche avancée** par nom, prénom, email, département, poste
- **Filtrage par département** avec menu déroulant
- **Tri** par colonnes (nom, département, date d'embauche, salaire)
- **Actions rapides** :
  - Voir les détails
  - Modifier
  - Archiver
  - Supprimer 
- **Export PDF** de la liste complète des employés
- **Pagination** pour grandes listes
- **Design responsive** adapté mobile/tablette/desktop

#### Ajout/Modification d'Employé
- **Formulaire complet** avec validation
- **Champs disponibles** :
  - Matricule (génération automatique)
  - Nom et Prénom
  - Email
  - Téléphone
  - Date d'embauche
  - Département (IT, Commercial, RH, Finance, Marketing, Production)
  - Poste
  - Salaire
  - Statut (Actif, Archivé)
- **Validation en temps réel** des champs
- **Calcul automatique** de l'ancienneté
- **Notifications** de succès/erreur

#### Détails de l'Employé
- **Vue détaillée** avec toutes les informations
- **Affichage de l'ancienneté** calculée automatiquement
- **Actions disponibles** :
  - Modifier les informations
  - Archiver l'employé
  - Retour à la liste
- **Design de carte** moderne avec badges de département

### 📈 Calculs Automatiques
- **Ancienneté** : Calcul automatique en années et mois
- **Masse salariale** : Somme totale des salaires
- **Salaire moyen** : Calcul automatique
- **Anniversaires** : Détection automatique des anniversaires d'embauche du mois

### 📄 Export de Données
- **Export PDF professionnel** avec :
  - En-tête avec logo et titre
  - Date de génération
  - Nombre total d'employés
  - Tableau formaté avec toutes les informations
  - Mise en page professionnelle

### 🎨 Interface Utilisateur
- **Design moderne** avec palette de couleurs sombre premium
- **Mode sombre/clair** avec toggle de thème
- **Animations fluides** et transitions
- **Responsive design** pour tous les écrans
- **Notifications toast** modernes avec react-hot-toast
- **Icônes Lucide React** pour une interface intuitive
- **Loading states** pour une meilleure UX

### 🔍 Recherche & Filtres
- **Recherche globale** dans tous les champs
- **Filtrage par département**
- **Tri multi-colonnes**
- **Recherche en temps réel** sans rechargement

### 📱 Responsive Design
- **Mobile-first** approach
- **Adaptation tablette** optimisée
- **Desktop** avec layout complet
- **Navigation adaptative** selon la taille d'écran

## 🛠️ Technologies Utilisées

### Frontend
- **React 19.2.0** - Bibliothèque UI moderne
- **React Router DOM 7.10.1** - Routage côté client
- **Redux Toolkit 2.11.1** - Gestion d'état globale
- **React Redux 9.2.0** - Intégration React-Redux
- **Axios 1.13.2** - Client HTTP pour les requêtes API

### Styling & UI
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **tailwindcss-animate 1.0.7** - Animations Tailwind
- **tailwind-merge 3.4.0** - Fusion de classes Tailwind
- **clsx 2.1.1** - Utilitaire pour les classes conditionnelles
- **class-variance-authority 0.7.1** - Gestion des variantes de composants

### Graphiques & Visualisation
- **Recharts 3.5.1** - Bibliothèque de graphiques React

### Icons & Assets
- **Lucide React 0.559.0** - Bibliothèque d'icônes moderne

### PDF & Export
- **jsPDF 3.0.4** - Génération de PDF côté client
- **jspdf-autotable 5.0.2** - Tables dans les PDF

### Notifications
- **react-hot-toast 2.6.0** - Système de notifications toast moderne

### Backend (Mock API)
- **JSON Server 1.0.0-beta.3** - API REST mock pour développement
- **Concurrently 9.2.1** - Exécution simultanée de scripts

### Build Tools & DevDependencies
- **Vite 7.2.4** - Build tool ultra-rapide
- **@vitejs/plugin-react 5.1.1** - Plugin React pour Vite
- **ESLint 9.39.1** - Linter JavaScript
- **PostCSS 8.5.6** - Traitement CSS
- **Autoprefixer 10.4.22** - Préfixes CSS automatiques







## 🚀 Démarrage

### Démarrage Complet (Recommandé)

Cette commande démarre simultanément tous les serveurs nécessaires :

```bash
npm start
```

Cette commande lance :
- ✅ **Frontend** (Vite Dev Server) sur `http://localhost:5173` (ou port disponible)
- ✅ **API Employés** (JSON Server) sur `http://localhost:3001`
- ✅ **API Auth** (JSON Server) sur `http://localhost:3002`

### Démarrage Individuel

Si vous préférez démarrer les serveurs séparément :

```bash
# Terminal 1 - Serveur Employés
npm run server

# Terminal 2 - Serveur Authentification
npm run data-server

# Terminal 3 - Frontend
npm run dev
```

### Build de Production

Pour créer une version de production :

```bash
npm run build
```

Pour prévisualiser le build de production :

```bash
npm run preview
```

## 📁 Structure du Projet

```
innovate-tech-rh/
├── public/
│   ├── logo.png              # Logo de l'application
│   └── vite.svg              # SVG Vite
├── src/
│   ├── app/
│   │   └── store.js          # Configuration Redux Store
│   ├── components/
│   │   ├── auth/
│   │   │   └── ProtectedRoute.jsx    # Composant de protection des routes
│   │   ├── common/
│   │   │   └── Button.jsx            # Bouton commun (ancien)
│   │   ├── dashboard/
│   │   │   └── StatCard.jsx          # Carte de statistique pour le dashboard
│   │   ├── layout/
│   │   │   ├── Header.jsx            # En-tête avec navigation
│   │   │   ├── MainLayout.jsx        # Layout principal avec Outlet
│   │   │   └── Sidebar.jsx           # Barre latérale (si utilisée)
│   │   └── ui/
│   │       └── Button.jsx            # Composant bouton réutilisable
│   ├── contexts/
│   │   ├── LanguageContext.jsx       # Contexte de langue (i18n)
│   │   └── ThemeContext.jsx          # Contexte de thème (dark/light)
│   ├── features/
│   │   ├── auth/
│   │   │   └── authSlice.js          # Redux slice pour l'authentification
│   │   └── employees/
│   │       └── employeeSlice.js      # Redux slice pour les employés
│   ├── pages/
│   │   ├── Dashboard.jsx             # Page tableau de bord
│   │   ├── EmployeeDetails.jsx       # Page détails d'un employé
│   │   ├── EmployeeForm.jsx          # Formulaire ajout/modification
│   │   ├── EmployeeList.jsx          # Liste des employés
│   │   ├── Landing.jsx               # Page d'accueil
│   │   ├── LoadingTransition.jsx     # Page de transition après login
│   │   └── Login.jsx                 # Page de connexion
│   ├── services/
│   │   └── api.js                    # Configuration Axios et services API
│   ├── utils/
│   │   ├── cn.js                     # Utilitaire pour classes CSS
│   │   ├── helpers.js                # Fonctions utilitaires (formatCurrency, calculateSeniority, etc.)
│   │   ├── pdfExport.js              # Fonction d'export PDF
│   │   └── translations.js           # Traductions i18n
│   ├── App.jsx                       # Composant racine avec routes
│   ├── App.css                       # Styles globaux
│   ├── index.css                     # Styles Tailwind et globaux
│   └── main.jsx                      # Point d'entrée React
├── db.json                           # Base de données des employés (JSON Server)
├── data.json                         # Base de données d'authentification (JSON Server)
├── .gitignore                        # Fichiers ignorés par Git
├── eslint.config.js                  # Configuration ESLint
├── package.json                      # Dépendances et scripts npm
├── package-lock.json                 # Lock file des dépendances
├── postcss.config.js                 # Configuration PostCSS
├── tailwind.config.js                # Configuration Tailwind CSS
├── vite.config.js                    # Configuration Vite
└── README.md                         # Documentation du projet
```

## 🔌 API & Endpoints

### API Employés (Port 3001)

Base URL: `http://localhost:3001`

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/employees` | Récupérer tous les employés |
| GET | `/employees/:id` | Récupérer un employé par ID |
| POST | `/employees` | Créer un nouvel employé |
| PUT | `/employees/:id` | Mettre à jour un employé |
| PATCH | `/employees/:id` | Mettre à jour partiellement un employé |
| DELETE | `/employees/:id` | Supprimer un employé |

### API Authentification (Port 3002)

Base URL: `http://localhost:3002`

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/users` | Récupérer tous les utilisateurs |

### Structure des Données

#### Employé (Employee)
```json
{
  "id": "string",
  "matricule": "string",
  "nom": "string",
  "prenom": "string",
  "email": "string",
  "telephone": "string",
  "dateEmbauche": "YYYY-MM-DD",
  "departement": "IT | Commercial | RH | Finance | Marketing | Production",
  "poste": "string",
  "salaire": "number",
  "status": "Actif | Archivé"
}
```

#### Utilisateur (User)
```json
{
  "id": "string",
  "email": "string",
  "password": "string",
  "role": "admin | employee",
  "name": "string"
}
```

## 🔐 Comptes de Démonstration

### Compte Administrateur
- **Email:** `admin@innovatetech.ma`
- **Mot de passe:** `admin123`
- **Rôle:** Admin

### Compte Employé
- **Email:** `zakariahannane28@gmail.com`
- **Mot de passe:** `password123`
- **Rôle:** Employee

## 📖 Guide d'Utilisation

### 1. Connexion
1. Accédez à `http://localhost:5173`
2. Cliquez sur "Se connecter" ou naviguez vers `/login`
3. Entrez vos identifiants
4. Après connexion, vous serez redirigé vers la page de transition puis le dashboard

### 2. Dashboard
- Visualisez les statistiques globales
- Consultez les anniversaires d'embauche du mois
- Naviguez vers la liste des employés

### 3. Gestion des Employés

#### Ajouter un Employé
1. Cliquez sur "Employés" dans la navigation
2. Cliquez sur le bouton "Nouvel Employé" ou naviguez vers `/employees/new`
3. Remplissez le formulaire
4. Le matricule sera généré automatiquement si non fourni
5. Cliquez sur "Enregistrer"

#### Modifier un Employé
1. Dans la liste, cliquez sur l'icône "Modifier" ou sur le nom de l'employé
2. Modifiez les informations souhaitées
3. Cliquez sur "Enregistrer"

#### Voir les Détails
1. Cliquez sur l'icône "Voir" ou sur le nom de l'employé
2. Consultez toutes les informations détaillées
3. L'ancienneté est calculée automatiquement

#### Archiver un Employé
1. Cliquez sur "Archiver" dans les actions
2. Confirmez l'action
3. L'employé sera marqué comme archivé

#### Supprimer un Employé
1. Cliquez sur "Supprimer" dans les actions
2. Confirmez la suppression
3. L'employé sera définitivement supprimé

#### Rechercher et Filtrer
1. Utilisez la barre de recherche pour rechercher par nom, email, département, etc.
2. Utilisez le filtre par département pour affiner les résultats
3. Les résultats se mettent à jour en temps réel

#### Exporter en PDF
1. Dans la liste des employés, cliquez sur "Exporter PDF"
2. Un fichier PDF sera généré et téléchargé automatiquement

### 4. Déconnexion
1. Cliquez sur "Déconnexion" dans le header
2. Vous serez redirigé vers la page de connexion

## 🎨 Personnalisation

### Thème
L'application supporte le mode sombre et clair. Utilisez le bouton de toggle dans le header pour changer de thème.

### Couleurs des Départements
Les départements ont des couleurs associées :
- **IT:** Bleu (`#3b82f6`)
- **Commercial:** Cyan (`#06b6d4`)
- **RH:** Orange (`#f59e0b`)
- **Finance:** Violet (`#8b5cf6`)
- **Marketing:** Rouge (`#ef4444`)
- **Production:** Vert (`#10b981`)

## 🐛 Dépannage

### Les serveurs ne démarrent pas
- Vérifiez que les ports 3001, 3002 et 5173 sont disponibles
- Vérifiez que Node.js et npm sont installés correctement
- Supprimez `node_modules` et `package-lock.json`, puis réinstallez avec `npm install`

### Erreur de connexion à l'API
- Vérifiez que les serveurs JSON sont bien démarrés
- Vérifiez les URLs dans `src/services/api.js` et `src/features/auth/authSlice.js`
- Vérifiez que les fichiers `db.json` et `data.json` existent

### Problème d'authentification
- Vérifiez que le serveur sur le port 3002 est démarré
- Vérifiez les données dans `data.json`
- Videz le localStorage du navigateur et reconnectez-vous

### Erreurs de build
- Exécutez `npm run lint` pour vérifier les erreurs ESLint
- Vérifiez que toutes les dépendances sont installées
- Vérifiez la compatibilité des versions Node.js

## 📝 Scripts Disponibles

| Script | Description |
|--------|-------------|
| `npm start` | Démarre tous les serveurs (frontend + APIs) |
| `npm run dev` | Démarre uniquement le serveur de développement Vite |
| `npm run server` | Démarre uniquement le serveur JSON pour les employés (port 3001) |
| `npm run data-server` | Démarre uniquement le serveur JSON pour l'authentification (port 3002) |
| `npm run build` | Crée un build de production |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Exécute ESLint pour vérifier le code |

## 👥 Équipe de Développement

Ce projet a été développé avec passion et dévouement par :

### 👨‍💻 **Zakaria Hannane**
- Développeur Frontend
- Email: zakariahannane28@gmail.com

### 👨‍💻 **Yassine Rida**
- Développeur Frontend
- Contribution au développement et à la conception

---



## 🙏 Remerciements

- **React Team** pour l'excellent framework
- **Redux Team** pour la gestion d'état
- **Tailwind CSS** pour le système de design
- **Vite** pour l'outil de build ultra-rapide
- Tous les contributeurs des bibliothèques open-source utilisées

---

**© 2025 InnovateTech RH - Développé par Zakaria Hannane et Yassine Rida**


#   i n n o v a t e - R h  
 