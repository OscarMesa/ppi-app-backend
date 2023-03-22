import {MigrationInterface, QueryRunner} from "typeorm";

export class TeamPpi1679428010921 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."team_ppi" (
            "id_team" serial NOT NULL,
            "name" varchar(255),
            "observations" varchar(255),
            "createAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
            "updateAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY ("id_team")
          )
          ;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE team_ppi`);
    }

}
