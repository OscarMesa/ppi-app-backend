import { MigrationInterface, QueryRunner } from 'typeorm';

export class TeamPpi1679428010921 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "public"."team_ppi" (
            "id_team" serial NOT NULL,
            "id_sun_course" int2 NOT NULL,
            "name" varchar(255),
            "observations" varchar(255),
            "createAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
            "updateAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY ("id_team"),
            CONSTRAINT "fk_team_ppi_sun_course" FOREIGN KEY ("id_sun_course") REFERENCES "public"."course" ("id_course") ON DELETE RESTRICT ON UPDATE CASCADE
          )
          ;`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE team_ppi`);
  }
}
