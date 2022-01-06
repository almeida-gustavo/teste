import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePlanets1638639414175 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'planets',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'planet_travel_points',
            type: 'json',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
      true
    );

    await queryRunner.query(`
    insert into planets (name, planet_travel_points)
    values 
      ('Andvari', '{"Aqua": 13, "Calas": 23}'),
      ('Demeter', '{"Aqua": 22, "Calas": 25}'),
      ('Aqua', '{"Demeter": 30, "Calas": 12}'),
      ('Calas', '{"Andvari": 20, "Demeter": 25, "Calas": 15}'); 
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('planets');
  }
}
