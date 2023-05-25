import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateTables1685042944019 implements MigrationInterface {
  name = 'updateTables1685042944019';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`messages\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`message\` text NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`sender_id\` int UNSIGNED NULL, \`receiver_id\` int UNSIGNED NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`portfolios\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`path\` varchar(255) NOT NULL, \`userId\` int UNSIGNED NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`relations-states\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`label\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`relations\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`sender_id\` int UNSIGNED NOT NULL, \`receiver_id\` int UNSIGNED NOT NULL, \`state_id\` int UNSIGNED NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`professions\` DROP FOREIGN KEY \`FK_d148bdee4c0a6866cadb3f16150\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`professions\` CHANGE \`parent_id\` \`parent_id\` int UNSIGNED NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`messages\` ADD CONSTRAINT \`FK_22133395bd13b970ccd0c34ab22\` FOREIGN KEY (\`sender_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`messages\` ADD CONSTRAINT \`FK_b561864743d235f44e70addc1f5\` FOREIGN KEY (\`receiver_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`portfolios\` ADD CONSTRAINT \`FK_e4e66691a2634fcf5525e33ecf5\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`professions\` ADD CONSTRAINT \`FK_d148bdee4c0a6866cadb3f16150\` FOREIGN KEY (\`parent_id\`) REFERENCES \`professions\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`relations\` ADD CONSTRAINT \`FK_51780d8ad175fe6c40bb0c7e7cd\` FOREIGN KEY (\`sender_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`relations\` ADD CONSTRAINT \`FK_d334f195c30f57cb982d721907e\` FOREIGN KEY (\`receiver_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`relations\` ADD CONSTRAINT \`FK_975275e001c05b209d6e9036b43\` FOREIGN KEY (\`state_id\`) REFERENCES \`relations-states\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`relations\` DROP FOREIGN KEY \`FK_975275e001c05b209d6e9036b43\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`relations\` DROP FOREIGN KEY \`FK_d334f195c30f57cb982d721907e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`relations\` DROP FOREIGN KEY \`FK_51780d8ad175fe6c40bb0c7e7cd\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`professions\` DROP FOREIGN KEY \`FK_d148bdee4c0a6866cadb3f16150\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`portfolios\` DROP FOREIGN KEY \`FK_e4e66691a2634fcf5525e33ecf5\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`messages\` DROP FOREIGN KEY \`FK_b561864743d235f44e70addc1f5\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`messages\` DROP FOREIGN KEY \`FK_22133395bd13b970ccd0c34ab22\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`professions\` CHANGE \`parent_id\` \`parent_id\` int UNSIGNED NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`professions\` ADD CONSTRAINT \`FK_d148bdee4c0a6866cadb3f16150\` FOREIGN KEY (\`parent_id\`) REFERENCES \`professions\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`DROP TABLE \`relations\``);
    await queryRunner.query(`DROP TABLE \`relations-states\``);
    await queryRunner.query(`DROP TABLE \`portfolios\``);
    await queryRunner.query(`DROP TABLE \`messages\``);
  }
}
