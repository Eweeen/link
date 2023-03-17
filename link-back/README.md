# link-back

## Installer les dépendances

```sh
$ npm install
```

## Lancer le back

```sh
$ npm run start:dev
```

### Générer une nouvelle migration

Pour générer un nouveau fichier de migration, executez la commande suivante :

```sh
$ npm run build
$ npm run typeorm migration:generate migration_name
```

### Effectuer les migrations

```sh
$ npm run typeorm migration:run
```
