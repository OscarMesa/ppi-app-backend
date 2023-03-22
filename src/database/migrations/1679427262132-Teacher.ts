import { MigrationInterface, QueryRunner } from 'typeorm';

export class Teacher1679427262132 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "public"."teacher" (
            "id_teacher" serial NOT NULL,
            "id_user" int2,
            "document" varchar(255),
            "type_document" type_document_enum,
            "name" varchar(255),
            "lastname" varchar(255),
            "email" varchar(255),
            "area_expertise" varchar(255),
            "createAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
            "updateAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY ("id_teacher"),
            CONSTRAINT "fk_user_techer" FOREIGN KEY ("id_user") REFERENCES "public"."user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
          )
          ;`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE teacher`);
  }
}
