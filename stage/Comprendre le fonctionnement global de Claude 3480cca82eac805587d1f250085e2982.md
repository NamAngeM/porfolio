# Comprendre le fonctionnement global de Claude

<aside>
📘

**Guide de référence - Claude chez ODETEC**

Document structuré pour maîtriser l'écosystème Claude, de la configuration individuelle au déploiement en entreprise : concepts clés (modes, plugins, Skills, Projets, connecteurs, routines, MCP), bonnes pratiques et méthode de déploiement propre à ODETEC.

**Portée** - Technique & stratégique   ·   **Audience** - Équipes ODETEC   ·   **Sections** - 12   ·   **Version** - Avril 2026

</aside>

## Sommaire

| **01** | Écosystème Claude | **07** | Code et automatisation |
| --- | --- | --- | --- |
| **02** | Modes, styles, plugins et commandes | **08** | Routines et tâches planifiées |
| **03** | Le contexte dans Claude | **09** | Connecteurs et intégrations (MCP) |
| **04** | Configuration et modèles | **10** | Bonnes pratiques d'usage |
| **05** | Personnalisation - Skills et Projets | **11** | Gouvernance et cadrage entreprise |
| **06** | Artifacts | **12** | Méthode de déploiement ODETEC |

---

## 01 - Écosystème Claude

Claude n'est pas un outil unique mais un écosystème articulé autour de trois piliers principaux : **Chat**, **Cowork** et **Code**. Chacun répond à des usages distincts mais complémentaires.

<aside>
💬

**Chat**

Questions quotidiennes, rédaction, exploration d'idées.

</aside>

<aside>
🤝

**Cowork**

Brainstorming, analyse de documents, collaboration.

</aside>

<aside>
💻

**Code**

Programmation, débogage, explication de scripts.

</aside>

L'écosystème s'enrichit de briques transversales : **projets, artefacts, compétences (skills), connecteurs et tâches planifiées**, qui structurent le travail sur la durée.

---

## 02 - Modes, styles, plugins et commandes

Claude s'adapte au contexte grâce à ses **modes** et **styles** configurables. Il est possible de définir un ton (formel, créatif, concis), un registre ou une posture spécifique selon la tâche.

### Les modes et styles

- **Mode formel** - communication institutionnelle, livrables clients.
- **Mode créatif** - brainstorming, idéation, rédaction originale.
- **Mode concis** - réponses synthétiques, notes rapides.
- **Mode analytique** - raisonnement structuré, analyse de données.
- **Mode "Explanatory"** - Claude détaille son raisonnement étape par étape (utile en formation).
- **Mode "Learning"** - Claude pose des questions pour comprendre, plutôt que de répondre directement.

Les styles permettent d'ancrer Claude dans une **charte de communication précise**, utile pour les équipes souhaitant homogénéiser leurs productions.

### Les plugins - des mini-applications pour Claude

Un **plugin** (aussi appelé *extension*), c'est une **mini-application** installée dans Claude. Chaque plugin est un **package autonome** qui regroupe jusqu'à **3 briques complémentaires** : des **commandes**, des **compétences (Skills)** et des **connecteurs**. C'est cette composition qui transforme Claude d'un simple assistant conversationnel en **outil métier configurable**.

<aside>
📦

**Un plugin = jusqu'à 3 briques imbriquées**

Comme une appli mobile regroupe interface + logique + données, un plugin Claude regroupe ses 3 briques constitutives et les expose à l'utilisateur final en un **seul geste d'installation**.

</aside>

<aside>
⌨️

**1. Commandes**

Les **raccourcis** tapés avec `/` qui déclenchent une action (`/cr-reunion`, `/tco`…).

**Rôle :** *point d'entrée utilisateur* - ce qu'on tape pour activer le plugin.

</aside>

<aside>
🧠

**2. Compétences (Skills)**

Les **instructions persistantes** qui apprennent à Claude un savoir-faire (méthode TCO, gabarit CR…).

**Rôle :** *cerveau du plugin* - la méthode et le ton que Claude applique. *(Détails : section 05.)*

</aside>

<aside>
🔌

**3. Connecteurs**

Les **accès aux outils externes** via MCP (Notion, Drive, Teams, GitHub…).

**Rôle :** *bras et yeux du plugin* - ce qui lui permet de lire et d'agir sur vos données. *(Détails : section 09.)*

</aside>

<aside>
🧩

**Un plugin peut embarquer 1, 2 ou 3 briques**

- **1 brique** - ex : *Recherche Web* (connecteur seul), *Code execution* (compétence technique seule), une commande native comme `/reset`.
- **2 briques** - ex : *Skill Creator* combine des commandes `/skill ...` + une compétence "créer et tester un Skill".
- **3 briques** - ex ODETEC imaginé : plugin *Analyse TCO ODETEC* = commande `/tco` + Skill "Analyse TCO" + connecteur Drive (lit les offres dans `/AO-2026`).

Plus un plugin embarque de briques, plus il est **autonome** pour l'utilisateur final : rien à configurer, on tape la commande et tout s'enchaîne.

</aside>

<aside>
💡

**Exemple ODETEC - un plugin complet en action**

Plugin fictif *"Audit concurrents ODETEC"* (3 briques) :

- **Commande** - `/audit-concurrent` lance la session.
- **Skill** - "Analyse d'offre concurrente" (grille TCO, 3 risques, 2 axes de différenciation).
- **Connecteurs** - Google Drive (lecture des offres dans `/AO-2026`) + Notion (écriture dans [Enrichir le Fichier des Entreprises concurrentes](https://www.notion.so/Enrichir-le-Fichier-des-Entreprises-concurrentes-3270cca82eac80019854d06323a2ac12?pvs=21)).

Résultat : un chargé d'AO tape `/audit-concurrent`, Claude lit les PDF, applique la méthode, remplit la base Notion. Une mini-app métier, en **une frappe**.

</aside>

### Brique n°1 - Les commandes (*slash commands*)

Les **commandes** sont la **première brique d'un plugin** : des raccourcis qu'on tape dans le chat avec le préfixe `/` pour **piloter Claude sans quitter la conversation** (changer de modèle, nettoyer la mémoire, invoquer un Skill, activer un style, ouvrir un Projet…). C'est le **point d'entrée utilisateur** du plugin : ce qu'on tape pour déclencher toute la chaîne Skill + connecteurs.

<aside>
⌨️

**Comment les utiliser**

1. Dans la barre de saisie du chat, tapez `/` → un menu contextuel s'ouvre avec toutes les commandes disponibles.
2. Tapez les premières lettres (`/mod`, `/ski`…) pour filtrer.
3. Sélectionnez ou complétez avec un argument (ex : `/model opus`).
4. Validez avec **Entrée** → la commande s'exécute immédiatement.
</aside>

#### Les commandes natives les plus utiles

<aside>
⚙️

**Pilotage de la conversation**

- **`/model`** - change le modèle en cours (Haiku / Sonnet / Opus).
- **`/reset`** ou **`/clear`** - efface l'historique et repart d'une session propre.
- **`/compact`** - compresse la conversation pour libérer du contexte sans tout perdre.
- **`/help`** - affiche la liste complète des commandes disponibles.
</aside>

<aside>
🛠️

**Personnalisation & métier**

- **`/skills`** - liste, active ou désactive un Skill (*ex : `/skills analyse-tco`*).
- **`/style`** - change le ton/style (formel, concis, créatif…).
- **`/projects`** - bascule vers un Projet ou en crée un nouveau.
- **`/feedback`** - envoie un retour sur la réponse en cours.
</aside>

<aside>
✨

**Les commandes personnalisées (*custom slash commands*)**

Au-delà des commandes natives, vous pouvez **créer vos propres commandes** pour encapsuler un prompt récurrent. Très utile pour industrialiser un réflexe d'équipe.

- **Forme :** un nom (`/cr-reunion`) + un prompt associé (+ parfois des arguments).
- **Exemple ODETEC :** `/cr-reunion` → déclenche le Skill "CR de réunion", demande la transcription, et produit le CR au format ODETEC.
- **Différence avec un Skill :** le Skill définit le *savoir-faire*, la commande est un **raccourci d'appel** qui l'active en 1 frappe.
</aside>

<aside>
💡

**Exemples concrets ODETEC**

- **`/model opus`** avant une analyse TCO lourde → on passe sur le modèle le plus puissant juste pour cette tâche.
- **`/compact`** après 2h d'échanges sur un AO → on garde l'essentiel du contexte sans perdre le fil.
- **`/skills analyse-offre`** en début de session veille concurrentielle → le Skill est prêt, plus besoin de réexpliquer la méthode.
- **`/cr-reunion`** (commande custom) → un collaborateur colle sa transcription Teams, le CR sort formaté en 30 secondes.
- **`/reset`** quand on change complètement de sujet → évite que Claude mélange deux contextes.
</aside>

<aside>
🎯

**Bonnes pratiques d'usage des commandes**

- **Apprendre 5 commandes clés** suffit pour 90 % des usages : `/model`, `/reset`, `/compact`, `/skills`, `/style`.
- **Créer une commande custom** dès qu'un même prompt est tapé 3 fois dans la semaine.
- **Documenter les commandes ODETEC** dans [Outils IA](https://www.notion.so/Outils-IA-19ed16ef7e344691aa375fcfc6b54994?pvs=21) pour que toute l'équipe les utilise.
- **Préfixe d'équipe** : nommer les commandes custom avec un préfixe clair (`/odetec-cr`, `/odetec-tco`) pour éviter les collisions.
</aside>

---

## 03 - Le contexte dans Claude

Le **contexte**, c'est tout ce que Claude "sait" au moment où il répond. Plus il est riche et pertinent, plus les réponses sont justes. C'est la variable qui a le plus d'impact sur la qualité du résultat.

### Les 4 sources du contexte

<aside>
1️⃣

**Le prompt**

La question ou consigne écrite dans le chat.

</aside>

<aside>
2️⃣

**Les fichiers joints**

PDF, Excel, images, code ajoutés à la conversation.

</aside>

<aside>
3️⃣

**Les instructions système**

Règles persistantes : Skills, *system prompts*, instructions de Projet.

</aside>

<aside>
4️⃣

**Les connecteurs**

Données récupérées en direct depuis Notion, Drive, GitHub…

</aside>

### La fenêtre de contexte

Claude a une **limite de contexte** (200 000 tokens sur Sonnet 4, ~500 pages de texte). Au-delà, il "oublie" le début de la conversation. D'où l'importance de bien structurer ce qu'on lui donne.

### Comment améliorer le contexte

<aside>
🎯

**6 leviers pour un meilleur contexte**

1. **Donner un rôle clair** - *"Tu es chef de projet transformation digitale chez ODETEC…"*
2. **Fournir les règles du jeu** - objectifs, contraintes, public visé, format attendu.
3. **Joindre les documents sources** plutôt que de paraphraser (PDF, données, modèles).
4. **Donner des exemples** (*few-shot*) - un exemple "avant/après" vaut mille consignes.
5. **Structurer** en sections balisées : `# Contexte`, `# Tâche`, `# Format de sortie`, `# Contraintes`.
6. **Capitaliser dans un Projet ou un Skill** dès que le contexte est réutilisable.
</aside>

<aside>
⚖️

**Exemple avant/après - Analyse d'une offre**

❌ **Prompt faible :** *"Résume cette offre."*

✅ **Prompt enrichi :**

*"Tu es analyste AO chez ODETEC (ingénierie bâtiment). Voici l'offre technique d'un concurrent (PDF joint). Compare-la à notre grille TCO standard (jointe). Livre : 1) un tableau des écarts, 2) les 3 risques principaux, 3) 2 axes de différenciation. Format Markdown, ton factuel, max 500 mots."*

</aside>

### Les pièges à éviter

- **Contexte pollué** - trop de fichiers sans rapport ralentissent et diluent la réponse.
- **Historique long** - dans une conversation qui dure, repartir d'un message propre est souvent plus efficace.
- **Infos implicites** - ne jamais supposer que Claude "connaît" ODETEC, un projet ou un jargon interne : l'expliciter.

---

## 04 - Configuration et modèles

La configuration repose sur deux leviers complémentaires : le **choix du modèle** et les **réglages fins**. Ensemble, ils ajustent le comportement de Claude au contexte métier, au budget et aux exigences de qualité.

### La famille de modèles Claude 4

<aside>
🧩

- **Haiku** - vitesse et légèreté, idéal pour les requêtes simples et fréquentes.
- **Sonnet** - équilibre performance/coût, usage polyvalent au quotidien.
- **Opus** - puissance maximale pour les tâches complexes et analytiques.
</aside>

### Quel modèle pour quel usage ?

| **Situation** | **Modèle recommandé** | **Pourquoi** |
| --- | --- | --- |
| Reformulation rapide, email court, Q&A factuel | Haiku | Vitesse + coût minimal |
| Rédaction, analyse standard, chat quotidien ODETEC | Sonnet | Meilleur rapport qualité/coût |
| Analyse TCO complexe, raisonnement juridique, refonte de document long | Opus | Puissance de raisonnement maximale |
| Débogage code délicat, architecture logicielle, revue de PR | Opus | Meilleure précision technique |

### Les réglages fins

Les paramètres avancés complètent le choix du modèle :

- **Température** - contrôle la créativité. Basse (0 - 0,3) pour du factuel, haute (0,7 - 1) pour de l'idéation.
- **Longueur de réponse** - borne la sortie. Utile pour imposer la concision sur les livrables courts.
- **Instructions système** - règles persistantes sur le rôle, le ton, les contraintes *(cf. section 05)*.

<aside>
💡

**Astuce ODETEC - discipline de coût**

Commencer par **Sonnet** par défaut, basculer sur **Opus** via `/model opus` uniquement pour les tâches qui le justifient (analyse lourde, décisions sensibles). Cette discipline évite les coûts superflus tout en gardant la qualité sur les cas critiques.

</aside>

---

## 05 - Personnalisation : Skills et Projets

<aside>
🧠

**Les Skills & compétences**

- Instructions persistantes qui « apprennent » à Claude un savoir-faire spécifique : méthode de rédaction, vocabulaire métier, processus interne ODETEC.
- Écrits une fois et réutilisés dans toutes les conversations : plus besoin de ré-expliquer le contexte à chaque session.
- Partageables entre collègues pour homogénéiser les pratiques à l'échelle de l'équipe.
</aside>

### Les 2 grandes familles de Skills

Tous les Skills ne servent pas la même chose. Anthropic distingue deux logiques complémentaires : les Skills qui **élèvent les capacités** de Claude (*capability uplift*) et ceux qui **encodent des préférences** (*encoded preference*). Comprendre la différence évite d'écrire des Skills confus ou redondants.

<aside>
🚀

**Capability uplift - étendre ce que Claude *sait faire***

Donne à Claude une **compétence ou une connaissance** qu'il n'a pas (ou maîtrise mal) par défaut.

**Répond à la question :** *"Que doit savoir faire Claude ?"*

**Contenu typique :**

- Méthodologie métier (grille TCO, méthode d'audit).
- Référentiel technique ou réglementaire (RE2020, CIR, normes bâtiment).
- Procédure interne complexe (workflow de qualification de lead).
- Jargon et vocabulaire métier spécialisé.
- Heuristiques de raisonnement ("vérifie toujours X avant de conclure sur Y").
</aside>

<aside>
🎨

**Encoded preference - encoder *comment* on aime les choses**

Fixe des **préférences de forme, de ton et de format** pour que les livrables soient cohérents.

**Répond à la question :** *"Comment Claude doit-il livrer ?"*

**Contenu typique :**

- Ton et registre (formel, direct, ton ODETEC).
- Structure obligatoire (gabarit CR, sections imposées).
- Conventions (dates JJ/MM/AAAA, unités SI, signature email).
- Format de sortie (Markdown, tableau, bullet points max 3 lignes).
- Ce qu'il faut *éviter* (jargon marketing, anglicismes, listes à rallonge).
</aside>

<aside>
🔍

**Comment les distinguer en pratique**

Si un collègue compétent produirait déjà un bon résultat sans ton Skill → c'est probablement un **encoded preference** (on formalise sa manière de faire).

Si même un expert aurait besoin d'apprendre une méthode ou un référentiel pour réussir → c'est un **capability uplift** (on transmet un savoir).

</aside>

<aside>
🎯

**Exemples ODETEC des deux familles**

**Capability uplift :**

- *"Analyse TCO"* - enseigne à Claude la grille de calcul du TCO utilisée chez ODETEC, ses paramètres, ses seuils de décision.
- *"Qualification CIR"* - explique les critères d'éligibilité Crédit Impôt Recherche et la manière de repérer un projet éligible.
- *"Audit énergétique bâtiment"* - donne la méthode d'analyse, les points de contrôle, les références réglementaires.

**Encoded preference :**

- *"Style ODETEC"* - ton institutionnel, pas d'anglicismes non traduits, phrases courtes, signature standardisée.
- *"Gabarit CR de réunion"* - sections fixes (Participants, Décisions, Actions, Points en suspens) + conventions de formatage.
- *"Email commercial ODETEC"* - structure accroche/valeur/CTA, longueur max, règles de politesse.
</aside>

<aside>
💡

**Règle de composition**

Un bon Skill reste **mono-intention** : ne pas mélanger capability uplift et encoded preference dans un même Skill. On les combine ensuite : un prompt peut activer *"Analyse TCO"* (ce que Claude sait faire) **+** *"Style ODETEC"* (comment il s'exprime). Cette séparation facilite la réutilisation et la maintenance.

</aside>

### Quand créer un Skill ?

<aside>
✅

**Créer un Skill si…**

- La tâche revient **au moins 3 fois** (règle du "3×").
- Vous réécrivez toujours les mêmes consignes en début de chat.
- Plusieurs collègues font la même chose avec des résultats hétérogènes.
- Il existe un **standard ODETEC** (charte, gabarit, méthode) à faire respecter.
</aside>

<aside>
⛔

**Ne pas créer de Skill si…**

- La tâche est ponctuelle ou très spécifique à un projet unique → utiliser un Projet.
- Les règles changent tout le temps → garder ça dans un prompt ad-hoc.
- Il s'agit de données confidentielles - un Skill est partagé, pas un coffre-fort.
</aside>

### Anatomie d'un Skill

Techniquement, un Skill est **un simple dossier contenant un fichier Markdown**. Cette simplicité est voulue : un Skill est versionnable (Git), lisible par un humain, et partageable comme n'importe quel document.

<aside>
📂

**Structure type d'un Skill**

```jsx
mon-skill/                    ← votre dossier de skill
├─ ⭐ SKILL.md               ← Le fichier principal (OBLIGATOIRE)
└─ 📁 references/            ← Documents de contexte (optionnel)
   ├─ guide-de-ton.md      → Votre style d'écriture
   ├─ template.md          → Vos modèles de documents
   └─ exemples.md          → Des exemples de résultats attendus
```

🟠 Fichier obligatoire   🔵 Dossiers   ⚪ Fichiers optionnels

</aside>

<aside>
⭐

**`SKILL.md` - le cœur du Skill (obligatoire)**

Fichier unique qui décrit **qui est Claude, ce qu'il doit faire et comment**. Il contient typiquement :

- Le **rôle** (*"Tu es…"*).
- L'**objectif** du Skill.
- La **méthode** pas à pas.
- Les **contraintes** et ce qu'il faut éviter.
- Des **références** vers les fichiers du dossier `references/` si besoin.
</aside>

<aside>
📁

**`references/` - le contexte approfondi (optionnel)**

Dossier regroupant des documents que Claude peut lire **à la demande**, invoqués depuis `SKILL.md`. Permet de garder le fichier principal court tout en fournissant de la matière détaillée :

- **`guide-de-ton.md`** - charte rédactionnelle, vocabulaire, tournures.
- **`template.md`** - gabarits de documents à suivre à la lettre.
- **`exemples.md`** - paires input → output idéales (*few-shot*).
</aside>

<aside>
💡

**Bonne pratique - séparer l'intention et la matière**

Garder `SKILL.md` **court et directif** (l'intention) et déporter tout ce qui est volumineux ou évolutif dans `references/` (la matière). Ça rend le Skill plus facile à maintenir et à faire évoluer sans tout réécrire.

</aside>

<aside>
🎯

**Exemple d'arborescence - Skill ODETEC "CR de réunion"**

```jsx
cr-reunion-odetec/
├─ SKILL.md                  ← Rôle + méthode + contraintes
└─ references/
   ├─ guide-de-ton.md        ← Ton factuel, pas d'adjectifs subjectifs
   ├─ template.md            ← Gabarit CR ODETEC (sections fixes)
   └─ exemples.md            ← 2 CR réels (avant → après)
```

</aside>

### Skill Creator - le plugin officiel pour industrialiser vos Skills

<aside>
🌟

**Skill Creator** est le **plugin officiel Anthropic** pour créer, tester, améliorer et partager vos Skills - de l'idée brute au fichier `.skill` prêt à diffuser. Il transforme l'écriture artisanale d'un `SKILL.md` en **processus outillé, mesurable et collaboratif**.

En une phrase : *"Décris ce que tu veux → il génère le Skill → il le teste → il l'améliore → il le package."*

</aside>

#### Les 6 capacités du plugin

<aside>
🛠️

**1. Création guidée** - *essentiel*

Génère un Skill complet à partir d'une **simple description** en langage naturel.

**Exemple ODETEC :** *"Je veux un Skill qui analyse une offre concurrente PDF selon notre grille TCO et sort un tableau d'écarts."* → le plugin produit un `SKILL.md` structuré, prêt à tester.

</aside>

<aside>
🧪

**2. Tests automatiques** - *qualité*

Lance des **évaluations** sur une batterie de cas pour vérifier que le Skill produit bien le résultat attendu.

**Exemple ODETEC :** on fournit 5 CR réels (input) + leurs versions idéales (output). Le plugin note si le Skill "CR de réunion" retrouve bien les décisions, actions, participants.

</aside>

<aside>
📊

**3. Benchmarks** - *mesure*

Compare plusieurs **versions** d'un Skill et attribue un **score chiffré** à chacune.

**Exemple ODETEC :** v1 = 72 %, v2 = 84 %, v3 = 81 %. On garde v2. Fini le "je trouve que ça marche mieux" : on a des chiffres.

</aside>

<aside>
🔄

**4. Optimisation** - *avancé*

Analyse les **échecs des tests** et propose des corrections ciblées du `SKILL.md`.

**Exemple ODETEC :** le plugin détecte que le Skill TCO oublie les coûts de maintenance dans 40 % des cas → il propose d'ajouter une étape explicite "Vérifier les 4 postes : CAPEX, OPEX, maintenance, fin de vie".

</aside>

<aside>
📦

**5. Packaging** - *partage*

Exporte le Skill en fichier **`.skill`** installable en **un clic**.

**Exemple ODETEC :** Ange finalise *CR-reunion-odetec.skill* → l'envoie sur Teams → chaque collaborateur l'installe sans rien configurer. Le standard se diffuse sans friction.

</aside>

<aside>
📝

**6. Description IA** - *trigger*

Génère la **description optimale** pour que Claude déclenche le Skill **tout seul** au bon moment.

**Exemple ODETEC :** sans qu'on dise *"active le Skill TCO"*, Claude le déclenche dès qu'il voit un PDF d'offre commerciale + une question sur les coûts.

</aside>

#### Workflow recommandé - de l'idée au Skill diffusé

<aside>
🗺️

**Les 7 étapes d'un Skill industrialisé**

1. **Décrire l'intention** en 2-3 phrases (*ce que je veux, sur quel input, quel output*).
2. **Création guidée** → le plugin génère un `SKILL.md` v0.
3. **Préparer 5 à 10 cas de test** (input réel + output idéal attendu).
4. **Tests automatiques** sur la v0 → on mesure où ça coince.
5. **Optimisation** auto + relecture humaine → v1, v2, v3…
6. **Benchmarks** pour valider que chaque version progresse vraiment.
7. **Packaging `.skill`** + **description IA** → diffusion équipe (Teams, Notion).
</aside>

<aside>
🎯

**Scénario complet ODETEC - Industrialiser le Skill "Analyse TCO"**

**Étape 1 - Intention :** *"Skill qui compare une offre concurrente à notre grille TCO ODETEC et produit un tableau d'écarts + 3 risques majeurs."*

**Étape 2 - Création guidée :** Skill Creator génère un `SKILL.md` initial en 30 secondes.

**Étape 3 - Cas de test :** 8 offres réelles anonymisées (dont 2 piégeuses : format atypique, données incomplètes).

**Étape 4 - Tests :** v0 → score 65 %, rate les offres sans données CAPEX explicites.

**Étape 5 - Optimisation :** le plugin suggère d'ajouter une règle "estimer CAPEX si absent, signaler l'hypothèse".

**Étape 6 - Benchmarks :** v1 → 82 %, v2 → 89 %. On garde v2.

**Étape 7 - Packaging :** `analyse-tco-odetec.skill` publié sur [Outils IA](https://www.notion.so/Outils-IA-19ed16ef7e344691aa375fcfc6b54994?pvs=21). Chaque chargé d'AO l'installe en 1 clic.

**Résultat :** un standard ODETEC reproductible, mesuré, et versionné - plus de dépendance à celui qui "sait bien prompter".

</aside>

#### Bonnes pratiques d'usage

<aside>
✅

**À faire**

- Préparer **5 à 10 cas de test** avant même de tester (sinon on optimise à l'aveugle).
- Inclure des **cas piégeux** (données manquantes, formats atypiques).
- Versionner les `.skill` expédiés dans [Outils IA](https://www.notion.so/Outils-IA-19ed16ef7e344691aa375fcfc6b54994?pvs=21).
- Relire la description IA générée : c'est elle qui décide du déclenchement.
- Re-benchmark après chaque modification manuelle du `SKILL.md`.
</aside>

<aside>
⛔

**À éviter**

- Publier un Skill **sans l'avoir benchmarké** (= qualité aléatoire).
- Accepter **aveuglément** les optimisations auto sans relecture.
- Inclure des **données confidentielles** dans les cas de test (clients, offres non anonymisées).
- **Mélanger 2 intentions** dans un seul Skill : faire 2 Skills distincts, c'est plus simple à tester.
- Oublier d'**incrémenter la version** à chaque diffusion (v1, v2, v2.1…).
</aside>

<aside>
💡

**Pourquoi c'est stratégique pour ODETEC**

Sans Skill Creator, chaque Skill reste un fichier artisanal, difficile à maintenir. Avec le plugin, on passe à une logique **produit** :

- Les Skills ODETEC deviennent **versionnés et mesurés** comme du code.
- Les améliorations sont **objectivées** (benchmarks chiffrés, pas du ressenti).
- La **diffusion** se fait en un clic via un fichier `.skill`, pas par copier-coller de prompt.
- Claude **déclenche seul** les bons Skills grâce à la description IA optimisée.
- À terme : une **bibliothèque de Skills ODETEC** (TCO, CIR, CR, emails, qualification lead…) réutilisable par tous, maîtrisée et gouvernée.
</aside>

### Le cycle d'amélioration - *itérer pour progresser*

Un Skill **ne se fige jamais**. C'est un actif vivant qui s'affine par **boucles courtes** : on teste, on mesure, on améliore, on recommence. Chaque cycle rend le Skill **plus fiable et plus précis**.

<aside>
1️⃣

**Tester**

Lancez des **évaluations sur vos cas d'usage réels**. Voyez précisément où le Skill réussit… et où il échoue.

👉 *ODETEC : 8 offres TCO réelles passées dans le Skill. On note chaque sortie.*

</aside>

<aside>
2️⃣

**Mesurer**

Comparez les **scores avant/après**. Identifiez précisément **quels points faibles** du Skill posent problème.

👉 *ODETEC : v0 à 65 % → échec systématique sur les offres sans CAPEX explicite.*

</aside>

<aside>
3️⃣

**Améliorer**

Le **Skill Creator propose des corrections** ciblées. Vous les acceptez, les ajustez, puis **relancez les tests**.

👉 *ODETEC : ajout d'une règle d'estimation CAPEX → v1 à 82 %, v2 à 89 %.*

</aside>

<aside>
🔁

**Itérer → la boucle vertueuse**

Tester → Mesurer → Améliorer → Tester → …

La valeur d'un Skill ne vient pas de sa première version, mais du **nombre de cycles** qu'il a traversés. Un Skill v5 benchmarké bat presque toujours un Skill v1 "bien écrit d'un coup".

</aside>

<aside>
⏱️

**Rythme recommandé chez ODETEC**

- **Phase de construction** : 1 cycle par jour pendant 3-5 jours (jusqu'à atteindre ≥ 85 %).
- **Phase de maintenance** : 1 re-benchmark par mois + quand un cas d'usage échoue en réel.
- **Déclencheur obligatoire** : toute modification manuelle du `SKILL.md` → nouveau cycle complet.
</aside>

### Skills qui évoluent - *les 2 super-pouvoirs*

Un Skill bien construit n'est pas figé : il **apprend et se répare** dans le temps. C'est ce qui le distingue d'un simple prompt sauvegardé. Deux mécanismes fondamentaux, complémentaires, rendent cela possible.

<aside>
📈

**Super-pouvoir 1 - Self-Improving**

*"Apprend de ses erreurs, comme un humain."*

→ Vous **corrigez Claude une fois**.

→ Il **met à jour son propre Skill** pour intégrer la correction.

→ Il **ne refait plus jamais la même erreur** dans les futures conversations.

**Mécanisme :** chaque feedback humain se transforme en **ajout structurant** au `SKILL.md` (nouvelle règle, nouvel exemple, nouvelle heuristique). Le Skill devient plus intelligent à chaque usage.

</aside>

<aside>
🔧

**Super-pouvoir 2 - Self-Healing**

*"Se répare tout seul, comme un système immunitaire."*

✅ **Détecte** quand quelque chose ne marche pas (format inattendu, donnée manquante, règle violée).

✅ **Se corrige automatiquement** sans intervention humaine.

✅ **Gère les cas imprévus** sans casser la sortie.

**Mécanisme :** le `SKILL.md` inclut des **garde-fous explicites** ("si X absent → estimer + signaler l'hypothèse") qui rendent le Skill robuste aux inputs dégradés.

</aside>

<aside>
➕

**Self-Improving × Self-Healing - l'effet combiné**

Le premier fait **grandir** le Skill dans le temps (il couvre de plus en plus de cas).

Le second le rend **résilient** face à l'inconnu (il ne plante plus sur les cas atypiques).

Ensemble, ils transforment un Skill d'un simple "modèle figé" en **actif qui se bonifie avec l'usage** - exactement comme un collaborateur qui monte en compétence.

</aside>

<aside>
🎯

**Exemples concrets ODETEC**

**Self-Improving - Skill "CR de réunion"**

Un jour, Ange corrige manuellement : *"Ne mets jamais les dates de naissance dans les CR, même si elles sont évoquées en réunion."* → le Skill intègre la règle dans son `SKILL.md` → tous les CR suivants respectent cette contrainte, sans que personne ait à le rappeler.

**Self-Healing - Skill "Analyse TCO"**

Une offre concurrente arrive **sans données CAPEX explicites** (cas imprévu). Au lieu d'ignorer la ligne ou de planter, le Skill détecte l'absence, **estime le CAPEX** à partir des ratios du secteur, et **signale explicitement l'hypothèse** dans la sortie ("CAPEX estimé, à valider"). La livraison reste utilisable.

</aside>

<aside>
🚨

**Attention - ce n'est pas magique**

Ces deux super-pouvoirs n'apparaissent que si :

- Le Skill est **instrumenté** (tests, benchmarks réguliers).
- Les **feedbacks humains** sont systématiquement capturés et poussés dans le `SKILL.md`.
- Des **règles de fallback explicites** sont définies dès la conception ("si donnée manquante, faire X").

Sans ces pratiques, on reste sur un prompt figé, pas sur un Skill vivant.

</aside>

### Comment construire un Skill (méthode en 5 étapes)

1. **Identifier la tâche récurrente** et lister ce qui varie / ce qui est constant.
2. **Rédiger le rôle** de Claude (*"Tu es…"*) et le ton attendu.
3. **Décrire la méthode** pas à pas (format de sortie, sections obligatoires, contraintes).
4. **Donner 1 à 2 exemples** complets (input → output souhaité).
5. **Tester puis affiner** avec 3-4 cas réels avant de partager à l'équipe.

<aside>
🧪

**Exemple concret - Skill "CR de réunion ODETEC"**

```jsx
Rôle : Tu es assistant comptes-rendus pour ODETEC.
Entrée : transcription brute ou notes d'une réunion.
Sortie : CR Markdown structuré avec :
  # Titre (Réunion [sujet] - [date])
  ## Participants
  ## Décisions
  ## Actions (tableau : Qui | Quoi | Pour quand)
  ## Points en suspens
Ton : factuel, synthétique, pas de reformulation subjective.
Contraintes : pas de prénoms sans nom de famille, dates au format JJ/MM/AAAA.
Exemple : [input court] → [output attendu].
```

</aside>

<aside>
💡

**Autres idées de Skills pour ODETEC**

- **Analyse d'offre concurrente** - extraction structurée selon la grille TCO.
- **Rédaction d'email commercial** - ton ODETEC, signature, call-to-action.
- **Vulgarisation technique** - transformer un doc ingénieur en note décideur.
- **Qualification de lead** - scoring selon critères marketing internes.
- **Revue de fiche-métier** - vérifier cohérence avec la trame ressources équipe.
</aside>

<aside>
📁

**Les Projets**

- Espace de travail dédié qui regroupe : conversations, fichiers uploadés, instructions spécifiques et mémoire contextuelle.
- Contrairement aux conversations isolées, un Projet **conserve le contexte sur la durée** - Claude « se souvient » des éléments clés d'une session à l'autre.
- Idéal pour les missions longues : suivi d'un appel d'offres, pilotage d'un projet client, rédaction d'une documentation technique.
- Chaque projet peut avoir ses propres instructions système, son ton, ses contraintes - une configuration sur mesure par usage.
</aside>

<aside>
🎯

**Exemple concret - Projet "AO Bâtiment Biosourcé 2026"**

- **Fichiers joints** : cahier des charges client, offres concurrentes, gabarit mémoire technique ODETEC, grille TCO.
- **Instructions projet** : *"Tu accompagnes la réponse à cet AO. Toujours raisonner à partir des 4 docs joints. Ton : technique, rigoureux. Mentionner les sources."*
- **Usages** : rédaction de sections du mémoire, relecture croisée, génération de tableaux comparatifs, Q&A avec le client simulé.
</aside>

> La combinaison **Skills + Projets** constitue le socle de la personnalisation entreprise : les Skills définissent *comment* Claude travaille, les Projets définissent *sur quoi* il travaille en continu.
> 

La personnalisation s'appuie également sur les **instructions système** (*system prompts*), qui fixent le rôle, le ton et les règles de comportement de Claude pour une équipe ou un usage précis - par exemple : *« Tu es l'assistant RH d'ODETEC, tu réponds toujours en français et tu respectes la charte de confidentialité interne. »*

---

## 06 - Artifacts

Les **Artifacts** constituent une fenêtre séparée qui s'ouvre pour prévisualiser en temps réel des productions structurées : code, documents Markdown, schémas, mini-applications ou sites web.

<aside>
💻

**Code**

Scripts, composants, interfaces interactives.

</aside>

<aside>
📄

**Documents**

Markdown, rapports, modèles.

</aside>

<aside>
📊

**Schémas**

Diagrammes, cartes mentales, flux.

</aside>

<aside>
🌐

**Web**

Pages HTML, dashboards, widgets.

</aside>

Les Artifacts favorisent une **collaboration fluide** : l'utilisateur voit immédiatement le résultat et peut demander des ajustements en temps réel.

---

## 07 - Code et automatisation

Claude excelle dans l'accompagnement des équipes techniques : **génération de code, revue, débogage, documentation et explication de scripts** existants.

<aside>
⚙️

**Cas d'usage code chez ODETEC**

- Génération et revue de scripts métier (Python, SQL, Apps Script).
- Documentation automatique de bases de code existantes.
- Débogage assisté et suggestions d'optimisation.
- Génération de formules complexes Notion / Excel / Power Query.
</aside>

<aside>
🧪

**Exemple concret**

*"Voici un script Make qui synchronise Wandeed → Notion. Il plante quand l'heure de fin est vide. Diagnostique et propose une correction robuste aux cas limites."*

</aside>

---

## 08 - Routines et tâches planifiées

Les **routines** (*Scheduled Tasks*) permettent à Claude d'exécuter une tâche **automatiquement à intervalle régulier**, sans intervention humaine. C'est la brique qui transforme Claude d'assistant ponctuel en **agent autonome**.

### Ce qu'une routine peut faire

- Tourner tous les **jours / semaines / à une date précise**.
- Lire une source (connecteur, fichier, email) et produire une sortie (résumé, rapport, alerte).
- Déclencher des actions dans les outils connectés via MCP.
- Notifier l'équipe (Teams, email, Notion) si une condition est remplie.

<aside>
⏰

**Exemples de routines ODETEC**

- **Lundi 8h** - récupérer les nouvelles lignes de la base Projets Notion et envoyer un digest Teams à la direction.
- **Chaque vendredi 17h** - analyser les heures Wandeed de la semaine et alerter sur les saisies manquantes (complément de l'automatisation Make existante).
- **1er du mois** - générer un rapport de veille concurrentielle (recherche web + base Concours Notion).
- **Quotidien 7h** - préparer un brief de la journée à partir de l'agenda Google Calendar + des mails Gmail prioritaires.
</aside>

<aside>
🔄

**Routine vs Automatisation Make/n8n**

Une routine Claude est idéale quand il faut **du raisonnement ou du texte** (synthèse, rédaction, classification). Pour du flux de données structuré pur, Make / n8n restent plus adaptés. Les deux sont **complémentaires** : Make déclenche, Claude raisonne, Make diffuse.

</aside>

---

## 09 - Connecteurs et intégrations (MCP)

Le **MCP (Model Context Protocol)** est le standard ouvert qui permet à Claude de se connecter de manière sécurisée à des outils locaux ou des serveurs distants. Il constitue la **colonne vertébrale de l'intégration** en environnement professionnel.

### Catégories de connecteurs

- **Productivité & docs** : Notion, Google Drive, Box, SharePoint, Confluence.
- **Communication** : Gmail, Outlook, Slack, Microsoft Teams.
- **Gestion de projet** : Asana, Linear, Jira, [monday.com](http://monday.com).
- **Développement** : GitHub, GitLab, Sentry.
- **CRM & business** : HubSpot, Salesforce, Attio, Stripe, Ramp.
- **Design & data** : Figma, Amplitude.
- **Serveurs MCP custom** - exposer une base métier ODETEC (ex : API interne).

<aside>
🔌

**Exemples concrets d'usage chez ODETEC**

- **Notion + Claude** : *"Liste les projets en retard dans la base Projets et propose un plan de rattrapage pour chacun."*
- **GitHub + Claude** : *"Revue la PR #42, signale les risques de régression et propose des tests."*
- **Google Drive + Claude** : *"Dans le dossier AO-2026, compare les 3 mémoires techniques et extrais les arguments différenciants."*
- **Teams + Claude** : *"Résume les échanges du canal Transformation depuis lundi et liste les décisions prises."*
</aside>

<aside>
🔐

**Point de vigilance**

Chaque connecteur hérite des droits de l'utilisateur qui l'installe. Un connecteur Drive installé par un admin donne à Claude accès à **tout ce que voit cet admin**. Règle ODETEC : toujours connecter avec un compte aux droits strictement nécessaires.

</aside>

---

## 10 - Bonnes pratiques d'usage

<aside>
✅

**À faire**

- Formuler des instructions **claires, détaillées et contextualisées**.
- Utiliser les **Projets** pour structurer les missions longues.
- **Valider systématiquement** les productions sensibles (données, code en production, livrables clients).
- **Itérer** : une bonne réponse naît d'un dialogue, pas d'une seule requête.
- Capitaliser les instructions efficaces en **Skills réutilisables**.
- Spécifier le **format et la longueur** attendus dans chaque demande.
</aside>

<aside>
⛔

**À éviter**

- **Recopier sans relecture** une sortie Claude dans un livrable client.
- Partager des **données confidentielles** sans vérifier la classification ODETEC.
- Accumuler **fichiers et historique** sans nettoyer (contexte pollué → baisse de qualité).
- Rester en **"chat ponctuel"** alors qu'un Skill ou un Projet s'impose.
- Supposer que Claude **"connaît ODETEC"** - toujours expliciter le contexte interne.
- Utiliser **Opus par réflexe** alors que Sonnet suffit (coût).
</aside>

<aside>
🔁

**La discipline d'itération - 3 réflexes gagnants**

1. **Lire la sortie avant de la copier** - au moins sur les premières utilisations d'un nouveau Skill.
2. **Demander une reformulation** plutôt qu'abandonner une mauvaise réponse (*"Reformule ta section 2 en 5 lignes avec des chiffres."*).
3. **Capturer les améliorations** - un correctif utile mérite d'être intégré au Skill pour ne plus avoir à le redemander.
</aside>

---

## 11 - Gouvernance et cadrage entreprise

Le déploiement à l'échelle nécessite un **cadre de gouvernance clair**, couvrant la gestion des accès, la confidentialité des données et la traçabilité des usages.

> Les données transmises à Claude via l'API ne sont **pas utilisées pour l'entraînement** des modèles. Il est essentiel de définir quelles informations peuvent être partagées avec l'IA, selon la classification des données internes ODETEC.
> 

<aside>
🛡️

**Axes de gouvernance**

- Politique d'usage acceptable (PUA) dédiée à l'IA générative
- Classification des données autorisées à circuler dans Claude
- Gestion des rôles et des droits d'accès par équipe
- Formation et sensibilisation des utilisateurs
- Suivi des usages et métriques de valeur générée
</aside>

---

## 12 - Méthode de déploiement ODETEC

Un déploiement réussi suit une **progression en trois temps**, de l'expérimentation à la généralisation :

<aside>
1️⃣

**Phase 1 - Explorer**

Pilote sur 2-3 équipes volontaires. Identifier les cas d'usage à forte valeur.

</aside>

<aside>
2️⃣

**Phase 2 - Structurer**

Formaliser les Skills, Projets et connecteurs clés. Former les équipes.

</aside>

<aside>
3️⃣

**Phase 3 - Déployer**

Généralisation, gouvernance active, mesure de la valeur générée.

</aside>

> La clé d'un déploiement pérenne : **commencer par les usages où le gain de temps est immédiat et visible**, puis montée en compétence progressive vers les automatisations complexes.
> 

---

## À retenir - synthèse exécutive

<aside>
🎯

**Les 8 messages clés à garder en tête**

1. **Claude est un écosystème**, pas un outil unique : Chat / Cowork / Code, enrichis de briques transversales (Skills, Projets, connecteurs, routines).
2. **Le contexte est le levier n°1 de qualité** : rôle clair, règles du jeu, documents sources, exemples, structure - et capitalisation dans un Skill ou un Projet dès que c'est réutilisable.
3. **Un plugin = mini-application** qui combine jusqu'à 3 briques : commandes (point d'entrée), Skills (cerveau), connecteurs (bras & yeux).
4. **Skills = deux familles** : *capability uplift* (savoir-faire) et *encoded preference* (préférences de forme). Garder chaque Skill **mono-intention**.
5. **Skill Creator** transforme l'écriture artisanale en processus outillé : création guidée, tests, benchmarks, optimisation, packaging, description IA.
6. **Itérer rend un Skill meilleur qu'une v1 "bien écrite"** : Tester → Mesurer → Améliorer. Les Skills matures gagnent les super-pouvoirs *Self-Improving* et *Self-Healing*.
7. **Projets = contexte durable** pour les missions longues (AO, suivi client, documentation). Complémentaires aux Skills.
8. **Déploiement ODETEC en 3 temps** : Explorer (pilotes) → Structurer (Skills, connecteurs, formation) → Déployer (gouvernance et mesure de la valeur).
</aside>

<aside>
🚦

**Les 3 garde-fous entreprise**

- **Classification des données** avant partage avec Claude - jamais de confidentiel non classé.
- **Connecteurs au moindre privilège** - un compte de service dédié, pas un compte admin personnel.
- **Validation humaine** sur toute production sensible avant diffusion externe.
</aside>

---

<aside>
🪄

**ODETEC × Claude** - Guide de référence   ·   Version avril 2026   ·   12 sections

*Document maintenu par l'équipe Transformation digitale. Retours et suggestions bienvenus via le canal Teams dédié.*

</aside>