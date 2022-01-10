import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOutlay1641676602348 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "outlays",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "pet_id",
            type: "int",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "price",
            type: "int",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "fk_outlay_pet",
            columnNames: ["pet_id"],
            referencedTableName: "pets",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("outlays");
  }
}
