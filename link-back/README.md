# link-back

## Installer les dépendances

```sh
$ pnpm install
```

## Lancer le back

```sh
$ pnpm start:dev
```

### Générer une nouvelle migration

Pour générer un nouveau fichier de migration, executez la commande suivante :

```sh
$ pnpm build
$ pnpm typeorm migration:generate migration_name
```

### Effectuer les migrations

```sh
$ pnpm build
$ pnpm typeorm migration:run
```
