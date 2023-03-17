## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Générer une nouvelle migration

Pour générer un nouveau fichier de migration, executez la commande suivante :

```bash
npm run build
npm run typeorm migration:generate migration_name
```

Cette commande vérifie les différences entre le schéma de la base de données et les entités du projet. Le fichier de migration sera à la racine du projet. Il faudra donc le déplacer dans le dossier migrations.

### Effectuer les migrations

Pour effectuer les migrations, executez la commande suivante :

```bash
npm run typeorm migration:run
```

## Conventions Git

Structure Angular: :{type}:(portée): {sujet} {description} {footer}

Pour nommer les commits:

- build : changements qui affectent le système de build ou des dépendances externes (npm, make…)
- ci : changements concernant les fichiers et scripts d’intégration ou de configuration (Travis, Ansible, BrowserStack…)
- feat : ajout d’une nouvelle fonctionnalité
- fix : correction d’un bug
- perf : amélioration des performances
- refactor : modification qui n’apporte ni nouvelle fonctionalité ni d’amélioration de performances
- style : changement qui n’apporte aucune alteration fonctionnelle ou sémantique (indentation, mise en forme, ajout d’espace, renommante d’une variable…)
- docs : rédaction ou mise à jour de documentation
- test : ajout ou modification de tests

Pour plus d'informations: https://buzut.net/cours/versioning-avec-git/bien-nommer-ses-commits