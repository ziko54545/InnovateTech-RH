# InnovateTech RH - Système de Gestion des Employés

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11.1-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Plateforme de gestion RH moderne et complète**

[Fonctionnalités](#-fonctionnalités) • [Installation](#-installation) • [Démarrage](#-démarrage) • [Technologies](#-technologies-utilisées) • [Documentation](#-documentation)

</div>

---

## 📋 Table des Matières

- [À Propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies Utilisées](#-technologies-utilisées)
- [Prérequis](#-prérequis)
- [Installation](#-installation)
- [Démarrage](#-démarrage)
- [Structure du Projet](#-structure-du-projet)
- [API & Endpoints](#-api--endpoints)
- [Comptes de Démonstration](#-comptes-de-démonstration)
- [Guide d'Utilisation](#-guide-dutilisation)
- [Scripts Disponibles](#-scripts-disponibles)
- [Dépannage](#-dépannage)
- [Équipe](#-équipe)
- [License](#-license)

---

## 🎯 À Propos

**InnovateTech RH** est une application web moderne de gestion des ressources humaines conçue pour simplifier et optimiser la gestion des employés dans une entreprise. L'application offre une interface intuitive, des fonctionnalités complètes de CRUD (Create, Read, Update, Delete), des statistiques en temps réel, et des outils d'export de données.

### 🎯 Objectifs du Projet

- ✅ Centraliser la gestion des informations des employés
- ✅ Fournir des statistiques et analyses visuelles
- ✅ Automatiser les calculs d'ancienneté et de métriques RH
- ✅ Offrir une expérience utilisateur moderne et responsive
- ✅ Garantir la sécurité des données avec un système d'authentification

---

## ✨ Fonctionnalités

### 🔐 Authentification & Sécurité
- Système d'authentification sécurisé avec Redux Toolkit
- Protection des routes - Accès restreint aux pages protégées
- Gestion de session avec localStorage
- Page de transition animée après connexion
- Déconnexion sécurisée avec nettoyage des données

### 📊 Dashboard Interactif
- **Statistiques en temps réel** :
  - Nombre total d'employés
  - Masse salariale totale
  - Salaire moyen
  - Anniversaires d'embauche du mois
- **Graphiques interactifs** (Recharts) :
  - Répartition par département (graphique en donut)
  - Évolution des embauches par année (graphique en aires)
- Cartes statistiques avec icônes et tendances
- Section anniversaires avec affichage des employés concernés

### 👥 Gestion des Employés (CRUD Complet)

#### Liste des Employés
- Affichage en tableau avec pagination
- Recherche avancée (nom, prénom, email, département, poste)
- Filtrage par département
- Tri par colonnes (nom, département, date d'embauche, salaire)
- Actions rapides : Voir, Modifier, Archiver, Supprimer
- Export PDF de la liste complète
- Design responsive (mobile/tablette/desktop)

#### Formulaire Employé
- Formulaire complet avec validation en temps réel
- Génération automatique du matricule
- Champs : Matricule, Nom, Prénom, Email, Téléphone, Date d'embauche, Département, Poste, Salaire, Statut
- Calcul automatique de l'ancienneté
- Notifications toast de succès/erreur

#### Détails Employé
- Vue détaillée avec toutes les informations
- Calcul automatique de l'ancienneté (années et mois)
- Actions : Modifier, Archiver, Retour à la liste
- Design de carte moderne avec badges de département

### 📈 Fonctionnalités Avancées
- **Calculs Automatiques** : Ancienneté, Masse salariale, Salaire moyen
- **Export PDF** : Génération professionnelle avec jsPDF
- **Mode Dark/Light** : Toggle de thème
- **Internationalisation** : Support multilingue (contexte prêt)
- **Notifications** : Toast modernes avec react-hot-toast
- **Animations** : Transitions fluides avec Tailwind

---

## 🛠️ Technologies Utilisées

### Frontend Core
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
- **class-variance-authority 0.7.1** - Gestion des variantes

### Graphiques & Visualisation
- **Recharts 3.5.1** - Bibliothèque de graphiques React
- **Lucide React 0.559.0** - Icônes modernes

### PDF & Notifications
- **jsPDF 3.0.4** - Génération de PDF côté client
- **jspdf-autotable 5.0.2** - Tables dans les PDF
- **react-hot-toast 2.6.0** - Système de notifications toast

### Backend (Mock API)
- **JSON Server 1.0.0-beta.3** - API REST mock
- **Concurrently 9.2.1** - Exécution simultanée de scripts

### Build Tools
- **Vite 7.2.4** - Build tool ultra-rapide
- **@vitejs/plugin-react 5.1.1** - Plugin React pour Vite
- **ESLint 9.39.1** - Linter JavaScript
- **PostCSS 8.5.6** - Traitement CSS
- **Autoprefixer 10.4.22** - Préfixes CSS automatiques

---

## 📦 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18.x ou supérieure)
- **npm** (version 9.x ou supérieure) ou **yarn**
- Un navigateur moderne (Chrome, Firefox, Safari, Edge)

---

## 🚀 Installation

1. **Cloner le dépôt**
```bash
git clone https://github.com/votre-username/innovatetech-rh.git
cd innovatetech-rh
```

2. **Installer les dépendances**
```bash
npm install
```

---

## 🎬 Démarrage

### Démarrage Complet (Recommandé)

Lance simultanément le frontend et les APIs :

```bash
npm start
```

Cette commande démarre :
- ✅ **Frontend** (Vite) sur `http://localhost:5173`
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

```bash
# Créer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

---

## 📁 Structure du Projet

```
innovate-tech-rh/
├── public/
│   ├── logo.png                      # Logo de l'application
│   └── vite.svg                      # Icône Vite
├── src/
│   ├── app/
│   │   └── store.js                  # Configuration Redux Store
│   ├── components/
│   │   ├── auth/
│   │   │   └── ProtectedRoute.jsx    # Protection des routes
│   │   ├── dashboard/
│   │   │   └── StatCard.jsx          # Carte de statistique
│   │   ├── layout/
│   │   │   ├── Header.jsx            # En-tête navigation
│   │   │   └── MainLayout.jsx        # Layout principal
│   │   └── ui/
│   │       └── Button.jsx            # Composant bouton
│   ├── contexts/
│   │   ├── LanguageContext.jsx       # Contexte i18n
│   │   └── ThemeContext.jsx          # Contexte thème
│   ├── features/
│   │   ├── auth/
│   │   │   └── authSlice.js          # Redux slice auth
│   │   └── employees/
│   │       └── employeeSlice.js      # Redux slice employés
│   ├── pages/
│   │   ├── Dashboard.jsx             # Tableau de bord
│   │   ├── EmployeeDetails.jsx       # Détails employé
│   │   ├── EmployeeForm.jsx          # Formulaire CRUD
│   │   ├── EmployeeList.jsx          # Liste employés
│   │   ├── Landing.jsx               # Page d'accueil
│   │   ├── LoadingTransition.jsx     # Transition login
│   │   └── Login.jsx                 # Page connexion
│   ├── services/
│   │   └── api.js                    # Configuration Axios
│   ├── utils/
│   │   ├── cn.js                     # Utilitaire classes CSS
│   │   ├── helpers.js                # Fonctions helpers
│   │   ├── pdfExport.js              # Export PDF
│   │   └── translations.js           # Traductions i18n
│   ├── App.jsx                       # Composant racine
│   ├── App.css                       # Styles globaux
│   ├── index.css                     # Styles Tailwind
│   └── main.jsx                      # Point d'entrée
├── db.json                           # BDD employés (JSON Server)
├── data.json                         # BDD auth (JSON Server)
├── package.json                      # Dépendances npm
├── tailwind.config.js                # Config Tailwind
├── vite.config.js                    # Config Vite
└── README.md                         # Documentation
```

---

## 🔌 API & Endpoints

### API Employés (Port 3001)

**Base URL:** `http://localhost:3001`

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/employees` | Récupérer tous les employés |
| `GET` | `/employees/:id` | Récupérer un employé par ID |
| `POST` | `/employees` | Créer un nouvel employé |
| `PUT` | `/employees/:id` | Mettre à jour un employé |
| `PATCH` | `/employees/:id` | Mise à jour partielle |
| `DELETE` | `/employees/:id` | Supprimer un employé |

### API Authentification (Port 3002)

**Base URL:** `http://localhost:3002`

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `GET` | `/users` | Récupérer tous les utilisateurs |

### Structure des Données

#### Employé
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

#### Utilisateur
```json
{
  "id": "string",
  "email": "string",
  "password": "string",
  "role": "admin | employee",
  "name": "string"
}
```

---

## 🔐 Comptes de Démonstration

### Compte Administrateur
```
Email: 
Mot de passe: 
Rôle: Admin
```


---

## 📖 Guide d'Utilisation

### 1️⃣ Connexion
1. Accédez à `http://localhost:5173`
2. Cliquez sur "Se connecter"
3. Entrez vos identifiants
4. Vous serez redirigé vers le dashboard après une transition animée

### 2️⃣ Dashboard
- Visualisez les statistiques en temps réel
- Consultez les anniversaires d'embauche du mois
- Accédez aux graphiques de répartition

### 3️⃣ Gestion des Employés

#### Ajouter un Employé
1. Cliquez sur "Employés" → "Nouvel Employé"
2. Remplissez le formulaire (matricule auto-généré)
3. Cliquez sur "Enregistrer"

#### Modifier un Employé
1. Dans la liste, cliquez sur l'icône "Modifier"
2. Modifiez les informations
3. Enregistrez les modifications

#### Rechercher et Filtrer
1. Utilisez la barre de recherche (recherche globale)
2. Filtrez par département
3. Triez par colonne

#### Exporter en PDF
1. Cliquez sur "Exporter PDF" dans la liste
2. Le fichier sera téléchargé automatiquement

---

## 📝 Scripts Disponibles

| Script | Description |
|--------|-------------|
| `npm start` | Démarre tous les serveurs (frontend + APIs) |
| `npm run dev` | Démarre uniquement le frontend (Vite) |
| `npm run server` | Démarre l'API employés (port 3001) |
| `npm run data-server` | Démarre l'API auth (port 3002) |
| `npm run build` | Crée un build de production |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Exécute ESLint |

---

## 🐛 Dépannage

### Les serveurs ne démarrent pas
- Vérifiez que les ports 3001, 3002 et 5173 sont disponibles
- Vérifiez que Node.js et npm sont correctement installés
- Supprimez `node_modules` et réinstallez : `rm -rf node_modules && npm install`

### Erreur de connexion à l'API
- Vérifiez que les serveurs JSON sont démarrés
- Vérifiez que `db.json` et `data.json` existent à la racine
- Consultez la console du navigateur pour plus de détails

### Problème d'authentification
- Vérifiez que le serveur port 3002 fonctionne
- Videz le localStorage : `localStorage.clear()`
- Reconnectez-vous avec les comptes de démonstration

---

## 🎨 Personnalisation

### Thème
Utilisez le toggle dans le header pour basculer entre mode sombre et clair.

### Couleurs des Départements
```javascript
IT: #3b82f6 (Bleu)
Commercial: #06b6d4 (Cyan)
RH: #f59e0b (Orange)
Finance: #8b5cf6 (Violet)
Marketing: #ef4444 (Rouge)
Production: #10b981 (Vert)
```

---

## 👥 Équipe

Ce projet a été développé avec passion par :

<table>
  <tr>
    <td align="center">
      <img src="https://via.placeholder.com/100" width="100px;" alt="Zakaria"/>
      <br />
      <sub><b>Zakaria Hannane</b></sub>
      <br />
      <sub>Développeur Frontend</sub>
      <br />
      <a href="mailto:zakariahannane28@gmail.com">📧 Email</a>
    </td>
    <td align="center">
      <img src="https://via.placeholder.com/100" width="100px;" alt="Yassine"/>
      <br />
      <sub><b>Yassine Rida</b></sub>
      <br />
      <sub>Développeur Frontend</sub>
      <br />
      <sub>Contribution au développement</sub>
    </td>
  </tr>
</table>

---

## 🙏 Remerciements

- [React Team](https://react.dev/) pour l'excellent framework
- [Redux Team](https://redux.js.org/) pour la gestion d'état
- [Tailwind Labs](https://tailwindcss.com/) pour le système de design
- [Vite Team](https://vitejs.dev/) pour l'outil de build
- Tous les contributeurs des bibliothèques open-source utilisées

---

## 📄 License

Copyright © 2025 **InnovateTech RH**

Développé par **Zakaria Hannane** et **Yassine Rida**

---
