import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1682683670415 implements MigrationInterface {
  name = 'init1682683670415';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`genres\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`inspirations\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`user_id\` int UNSIGNED NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`professions\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`parent_id\` int UNSIGNED NULL, UNIQUE INDEX \`REL_d148bdee4c0a6866cadb3f1615\` (\`parent_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`roles\` (\`id\` tinyint UNSIGNED NOT NULL AUTO_INCREMENT, \`label\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`skills\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`user_id\` int UNSIGNED NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`lastname\` varchar(255) NOT NULL, \`firstname\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`short_description\` varchar(255) NULL, \`description\` text NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL DEFAULT 'default.webp', \`birth_date\` date NOT NULL, \`city\` varchar(255) NOT NULL, \`color\` varchar(255) NOT NULL DEFAULT '#000000', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`role_id\` tinyint UNSIGNED NOT NULL, \`profession_id\` int UNSIGNED NOT NULL, UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` (\`username\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`genres-users\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`genre_id\` int UNSIGNED NOT NULL, \`user_id\` int UNSIGNED NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`inspirations\` ADD CONSTRAINT \`FK_752418f16c1c1e48dea7fe40f68\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`professions\` ADD CONSTRAINT \`FK_d148bdee4c0a6866cadb3f16150\` FOREIGN KEY (\`parent_id\`) REFERENCES \`professions\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`skills\` ADD CONSTRAINT \`FK_b6037133328ed50f9b66cd547de\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD CONSTRAINT \`FK_a2cecd1a3531c0b041e29ba46e1\` FOREIGN KEY (\`role_id\`) REFERENCES \`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD CONSTRAINT \`FK_7d4c69a1fff00e1d87cb4e1e91c\` FOREIGN KEY (\`profession_id\`) REFERENCES \`professions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`genres-users\` ADD CONSTRAINT \`FK_f67a4da969c88bd1202624fdc6a\` FOREIGN KEY (\`genre_id\`) REFERENCES \`genres\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`genres-users\` ADD CONSTRAINT \`FK_7c2ea667456b0c02461dfce3422\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`genres-users\` DROP FOREIGN KEY \`FK_7c2ea667456b0c02461dfce3422\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`genres-users\` DROP FOREIGN KEY \`FK_f67a4da969c88bd1202624fdc6a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_7d4c69a1fff00e1d87cb4e1e91c\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_a2cecd1a3531c0b041e29ba46e1\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`skills\` DROP FOREIGN KEY \`FK_b6037133328ed50f9b66cd547de\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`professions\` DROP FOREIGN KEY \`FK_d148bdee4c0a6866cadb3f16150\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`inspirations\` DROP FOREIGN KEY \`FK_752418f16c1c1e48dea7fe40f68\``,
    );
    await queryRunner.query(`DROP TABLE \`genres-users\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\``,
    );
    await queryRunner.query(`DROP TABLE \`users\``);
    await queryRunner.query(`DROP TABLE \`skills\``);
    await queryRunner.query(`DROP TABLE \`roles\``);
    await queryRunner.query(
      `DROP INDEX \`REL_d148bdee4c0a6866cadb3f1615\` ON \`professions\``,
    );
    await queryRunner.query(`DROP TABLE \`professions\``);
    await queryRunner.query(`DROP TABLE \`inspirations\``);
    await queryRunner.query(`DROP TABLE \`genres\``);
  }
}
