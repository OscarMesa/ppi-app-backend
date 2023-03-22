import {MigrationInterface, QueryRunner} from "typeorm";

export class TeamMembers1679440573422 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."team_members" (
                                "id_member" serial NOT NULL,
                                "id_team" int2 NOT NULL,
                                "id_student" int2 NOT NULL,
                                "createAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
                                "updateAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
                                PRIMARY KEY ("id_member"),
                                CONSTRAINT "fk_team_member" FOREIGN KEY ("id_team") REFERENCES "public"."team_ppi" ("id_team") ON DELETE RESTRICT ON UPDATE CASCADE,
                                CONSTRAINT "fk_student_member" FOREIGN KEY ("id_student") REFERENCES "public"."student" ("student_id") ON DELETE RESTRICT ON UPDATE CASCADE
          )
          ;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE team_members`);
    }

}
