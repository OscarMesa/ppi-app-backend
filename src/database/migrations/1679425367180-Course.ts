import { MigrationInterface, QueryRunner } from 'typeorm';

export class Course1679425367180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "public"."course" (
            "id_course" serial NOT NULL,
            "name" varchar(255),
            "semester" int2,
            "description" varchar(255),
            "createAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
            "updateAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY ("id_course")
          )
          ;`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE course`);
  }
}
