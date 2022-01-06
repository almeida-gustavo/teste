import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreatePilots1638641349918 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pilots',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'certification',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'age',
            type: 'int',
          },
          {
            name: 'credits',
            type: 'int',
          },
          {
            name: 'location_planet_id',
            type: 'int',
          },
          {
            name: 'ship_id',
            type: 'int',
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

    await queryRunner.createForeignKey(
      'pilots',
      new TableForeignKey({
        columnNames: ['location_planet_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'planets',
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'pilots',
      new TableForeignKey({
        columnNames: ['ship_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'ships',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pilots');
  }
}
