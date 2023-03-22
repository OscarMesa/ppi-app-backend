import { MigrationInterface, QueryRunner } from 'typeorm';

export class Student1679422638582 implements MigrationInterface {
  name = 'Student1679422638582';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE gender_enum AS ENUM ('male', 'female');`,
    );
    await queryRunner.query(
      `CREATE TYPE type_document_enum  AS ENUM ('cc','ce','nip','nit','ti','pap');`,
    );
    await queryRunner.query(
      `CREATE TYPE education_level_enum AS ENUM ('initial', 'preschool', 'primary_basic', 'basic_high_school', 'technical_medium', 'professional_technique', 'technological', 'higher_university', 'specialization', 'mastery', 'phd', 'postdoc');`,
    );
    await queryRunner.query(`CREATE TABLE "public"."student" (
            "student_id" serial NOT NULL,
            "id_user" int2 NOT NULL,
            document varchar(255),
            type_document TYPE_DOCUMENT_ENUM,
            "name" varchar(255),
            "lastname" varchar(255),
            "email" varchar(255),
            "birth_date" date,
            "gender" GENDER_ENUM,
            "education_level" EDUCATION_LEVEL_ENUM,
            "educational_institution" varchar(255),
              "createAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
              "updateAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY ("student_id"),
            CONSTRAINT "fk_user_student" FOREIGN KEY ("id_user") REFERENCES "public"."user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
          );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE student`);
    await queryRunner.query(`DROP TYPE gender_enum`);
    await queryRunner.query(`DROP TYPE education_level_enum`);
    await queryRunner.query(`DROP TYPE type_document_enum`);
  }
}
