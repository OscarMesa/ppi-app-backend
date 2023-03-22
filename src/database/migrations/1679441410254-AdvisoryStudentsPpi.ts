import { MigrationInterface, QueryRunner } from 'typeorm';

export class AdvisoryStudentsPpi1679441410254 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "public"."advisory_students_ppi" (
            "id_advisory" serial,
            "id_team" int2 NOT NULL,
            "id_teacher" int2 NOT NULL,
            "individual_assistance" json,
            "advisory_date assigned" timestamptz,
            "observations" text,
            "createAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
            "updateAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY ("id_advisory"),
            CONSTRAINT "fk_advisory_team" FOREIGN KEY ("id_team") REFERENCES "public"."team_ppi" ("id_team") ON DELETE RESTRICT ON UPDATE CASCADE,
            CONSTRAINT "fk_advisory_teacher" FOREIGN KEY ("id_teacher") REFERENCES "public"."teacher" ("id_teacher") ON DELETE RESTRICT ON UPDATE CASCADE
          )
          ;`);
    await queryRunner.query(
      `COMMENT ON COLUMN "public"."advisory_students_ppi"."individual_assistance" IS 'This json will store the pertinent information regarding the attendance of each student';`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE advisory_students_ppi`);
  }
}
