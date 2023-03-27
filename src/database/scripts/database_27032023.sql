/*
 Navicat PostgreSQL Data Transfer

 Source Server         : Postgres Local
 Source Server Type    : PostgreSQL
 Source Server Version : 150002 (150002)
 Source Host           : localhost:5432
 Source Catalog        : ppi
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 150002 (150002)
 File Encoding         : 65001

 Date: 27/03/2023 09:56:30
*/


-- ----------------------------
-- Type structure for education_level_enum
-- ----------------------------
DROP TYPE IF EXISTS "public"."education_level_enum";
CREATE TYPE "public"."education_level_enum" AS ENUM (
  'initial',
  'preschool',
  'primary_basic',
  'basic_high_school',
  'technical_medium',
  'professional_technique',
  'technological',
  'higher_university',
  'specialization',
  'mastery',
  'phd',
  'postdoc'
);
ALTER TYPE "public"."education_level_enum" OWNER TO "postgres";

-- ----------------------------
-- Type structure for gender_enum
-- ----------------------------
DROP TYPE IF EXISTS "public"."gender_enum";
CREATE TYPE "public"."gender_enum" AS ENUM (
  'male',
  'female'
);
ALTER TYPE "public"."gender_enum" OWNER TO "postgres";

-- ----------------------------
-- Type structure for type_document_enum
-- ----------------------------
DROP TYPE IF EXISTS "public"."type_document_enum";
CREATE TYPE "public"."type_document_enum" AS ENUM (
  'cc',
  'ce',
  'nip',
  'nit',
  'ti',
  'pap'
);
ALTER TYPE "public"."type_document_enum" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for advisory_students_ppi_id_advisory_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."advisory_students_ppi_id_advisory_seq";
CREATE SEQUENCE "public"."advisory_students_ppi_id_advisory_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for course_id_course_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."course_id_course_seq";
CREATE SEQUENCE "public"."course_id_course_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for migrations_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."migrations_id_seq";
CREATE SEQUENCE "public"."migrations_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for notes_quadrant_id_nq_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."notes_quadrant_id_nq_seq";
CREATE SEQUENCE "public"."notes_quadrant_id_nq_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for semester_id_semester_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."semester_id_semester_seq";
CREATE SEQUENCE "public"."semester_id_semester_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for socialization_id_ns_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."socialization_id_ns_seq";
CREATE SEQUENCE "public"."socialization_id_ns_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for student_student_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."student_student_id_seq";
CREATE SEQUENCE "public"."student_student_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for teacher_id_teacher_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."teacher_id_teacher_seq";
CREATE SEQUENCE "public"."teacher_id_teacher_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for team_members_id_member_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."team_members_id_member_seq";
CREATE SEQUENCE "public"."team_members_id_member_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for team_ppi_id_team_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."team_ppi_id_team_seq";
CREATE SEQUENCE "public"."team_ppi_id_team_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for user_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."user_id_seq";
CREATE SEQUENCE "public"."user_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for advisory_students_ppi
-- ----------------------------
DROP TABLE IF EXISTS "public"."advisory_students_ppi";
CREATE TABLE "public"."advisory_students_ppi" (
  "id_advisory" int4 NOT NULL DEFAULT nextval('advisory_students_ppi_id_advisory_seq'::regclass),
  "id_team" int2 NOT NULL,
  "id_teacher" int2 NOT NULL,
  "individual_assistance" json,
  "advisory_date assigned" timestamptz(6),
  "observations" text COLLATE "pg_catalog"."default",
  "createAt" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updateAt" timestamptz(6) DEFAULT CURRENT_TIMESTAMP
)
;
COMMENT ON COLUMN "public"."advisory_students_ppi"."individual_assistance" IS 'This json will store the pertinent information regarding the attendance of each student';

-- ----------------------------
-- Records of advisory_students_ppi
-- ----------------------------

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS "public"."course";
CREATE TABLE "public"."course" (
  "id_course" int4 NOT NULL DEFAULT nextval('course_id_course_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "semester" int2,
  "description" varchar(255) COLLATE "pg_catalog"."default",
  "createAt" timestamptz(6) DEFAULT CURRENT_TIMESTAMP,
  "updateAt" timestamptz(6) DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of course
-- ----------------------------

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS "public"."migrations";
CREATE TABLE "public"."migrations" (
  "id" int4 NOT NULL DEFAULT nextval('migrations_id_seq'::regclass),
  "timestamp" int8 NOT NULL,
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO "public"."migrations" VALUES (13, 1679379953204, 'User1679379953204');
INSERT INTO "public"."migrations" VALUES (14, 1679422638582, 'Student1679422638582');
INSERT INTO "public"."migrations" VALUES (15, 1679425367180, 'Course1679425367180');
INSERT INTO "public"."migrations" VALUES (16, 1679427262132, 'Teacher1679427262132');
INSERT INTO "public"."migrations" VALUES (17, 1679428010921, 'TeamPpi1679428010921');
INSERT INTO "public"."migrations" VALUES (18, 1679440573422, 'TeamMembers1679440573422');
INSERT INTO "public"."migrations" VALUES (19, 1679441410254, 'AdvisoryStudentsPpi1679441410254');

-- ----------------------------
-- Table structure for notes_quadrant
-- ----------------------------
DROP TABLE IF EXISTS "public"."notes_quadrant";
CREATE TABLE "public"."notes_quadrant" (
  "id_nq" int4 NOT NULL DEFAULT nextval('notes_quadrant_id_nq_seq'::regclass),
  "id_tm" int2 NOT NULL,
  "id_teacher" int2,
  "tracking_notes" json NOT NULL,
  "quadrant_number" int2 NOT NULL,
  "createAt" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updateAt" timestamptz(6) DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of notes_quadrant
-- ----------------------------

-- ----------------------------
-- Table structure for semester
-- ----------------------------
DROP TABLE IF EXISTS "public"."semester";
CREATE TABLE "public"."semester" (
  "id_semester" int4 NOT NULL DEFAULT nextval('semester_id_semester_seq'::regclass),
  "semester" varchar(10) COLLATE "pg_catalog"."default" NOT NULL,
  "observations" varchar(255) COLLATE "pg_catalog"."default",
  "createAt" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updateAt" timestamptz(6) DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of semester
-- ----------------------------

-- ----------------------------
-- Table structure for socialization
-- ----------------------------
DROP TABLE IF EXISTS "public"."socialization";
CREATE TABLE "public"."socialization" (
  "id_ns" int4 NOT NULL DEFAULT nextval('socialization_id_ns_seq'::regclass),
  "id_team_ppi" int2 NOT NULL,
  "tracking_notes" json NOT NULL,
  "jury_name" varchar(255) COLLATE "pg_catalog"."default",
  "socialization_number" int2 NOT NULL,
  "date_to_socialize" timestamptz(6) NOT NULL,
  "createAt" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updateAt" timestamptz(6) DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of socialization
-- ----------------------------

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS "public"."student";
CREATE TABLE "public"."student" (
  "student_id" int4 NOT NULL DEFAULT nextval('student_student_id_seq'::regclass),
  "id_user" int2 NOT NULL,
  "document" varchar(255) COLLATE "pg_catalog"."default",
  "type_document" "public"."type_document_enum",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "lastname" varchar(255) COLLATE "pg_catalog"."default",
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "birth_date" date,
  "gender" "public"."gender_enum",
  "education_level" "public"."education_level_enum",
  "educational_institution" varchar(255) COLLATE "pg_catalog"."default",
  "createAt" timestamptz(6) DEFAULT CURRENT_TIMESTAMP,
  "updateAt" timestamptz(6) DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of student
-- ----------------------------

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS "public"."teacher";
CREATE TABLE "public"."teacher" (
  "id_teacher" int4 NOT NULL DEFAULT nextval('teacher_id_teacher_seq'::regclass),
  "id_user" int2,
  "document" varchar(255) COLLATE "pg_catalog"."default",
  "type_document" "public"."type_document_enum",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "lastname" varchar(255) COLLATE "pg_catalog"."default",
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "area_expertise" varchar(255) COLLATE "pg_catalog"."default",
  "createAt" timestamptz(6) DEFAULT CURRENT_TIMESTAMP,
  "updateAt" timestamptz(6) DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of teacher
-- ----------------------------

-- ----------------------------
-- Table structure for team_members
-- ----------------------------
DROP TABLE IF EXISTS "public"."team_members";
CREATE TABLE "public"."team_members" (
  "id_member" int4 NOT NULL DEFAULT nextval('team_members_id_member_seq'::regclass),
  "id_team" int2 NOT NULL,
  "id_student" int2 NOT NULL,
  "createAt" timestamptz(6) DEFAULT CURRENT_TIMESTAMP,
  "updateAt" timestamptz(6) DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of team_members
-- ----------------------------

-- ----------------------------
-- Table structure for team_ppi
-- ----------------------------
DROP TABLE IF EXISTS "public"."team_ppi";
CREATE TABLE "public"."team_ppi" (
  "id_team" int4 NOT NULL DEFAULT nextval('team_ppi_id_team_seq'::regclass),
  "id_sun_course" int2 NOT NULL,
  "id_semester" int2 NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "observations" varchar(255) COLLATE "pg_catalog"."default",
  "createAt" timestamptz(6) DEFAULT CURRENT_TIMESTAMP,
  "updateAt" timestamptz(6) DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of team_ppi
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS "public"."user";
CREATE TABLE "public"."user" (
  "id" int4 NOT NULL DEFAULT nextval('user_id_seq'::regclass),
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "role" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "createAt" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updateAt" timestamptz(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of user
-- ----------------------------

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."advisory_students_ppi_id_advisory_seq"
OWNED BY "public"."advisory_students_ppi"."id_advisory";
SELECT setval('"public"."advisory_students_ppi_id_advisory_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."course_id_course_seq"
OWNED BY "public"."course"."id_course";
SELECT setval('"public"."course_id_course_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."migrations_id_seq"
OWNED BY "public"."migrations"."id";
SELECT setval('"public"."migrations_id_seq"', 19, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."notes_quadrant_id_nq_seq"
OWNED BY "public"."notes_quadrant"."id_nq";
SELECT setval('"public"."notes_quadrant_id_nq_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."semester_id_semester_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."socialization_id_ns_seq"
OWNED BY "public"."socialization"."id_ns";
SELECT setval('"public"."socialization_id_ns_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."student_student_id_seq"
OWNED BY "public"."student"."student_id";
SELECT setval('"public"."student_student_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."teacher_id_teacher_seq"
OWNED BY "public"."teacher"."id_teacher";
SELECT setval('"public"."teacher_id_teacher_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."team_members_id_member_seq"
OWNED BY "public"."team_members"."id_member";
SELECT setval('"public"."team_members_id_member_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."team_ppi_id_team_seq"
OWNED BY "public"."team_ppi"."id_team";
SELECT setval('"public"."team_ppi_id_team_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."user_id_seq"
OWNED BY "public"."user"."id";
SELECT setval('"public"."user_id_seq"', 1, false);

-- ----------------------------
-- Primary Key structure for table advisory_students_ppi
-- ----------------------------
ALTER TABLE "public"."advisory_students_ppi" ADD CONSTRAINT "advisory_students_ppi_pkey" PRIMARY KEY ("id_advisory");

-- ----------------------------
-- Primary Key structure for table course
-- ----------------------------
ALTER TABLE "public"."course" ADD CONSTRAINT "course_pkey" PRIMARY KEY ("id_course");

-- ----------------------------
-- Primary Key structure for table migrations
-- ----------------------------
ALTER TABLE "public"."migrations" ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table notes_quadrant
-- ----------------------------
ALTER TABLE "public"."notes_quadrant" ADD CONSTRAINT "notes_quadrant_pkey" PRIMARY KEY ("id_nq");

-- ----------------------------
-- Primary Key structure for table semester
-- ----------------------------
ALTER TABLE "public"."semester" ADD CONSTRAINT "semester_pkey" PRIMARY KEY ("id_semester");

-- ----------------------------
-- Primary Key structure for table socialization
-- ----------------------------
ALTER TABLE "public"."socialization" ADD CONSTRAINT "socialization_pkey" PRIMARY KEY ("id_ns");

-- ----------------------------
-- Primary Key structure for table student
-- ----------------------------
ALTER TABLE "public"."student" ADD CONSTRAINT "student_pkey" PRIMARY KEY ("student_id");

-- ----------------------------
-- Primary Key structure for table teacher
-- ----------------------------
ALTER TABLE "public"."teacher" ADD CONSTRAINT "teacher_pkey" PRIMARY KEY ("id_teacher");

-- ----------------------------
-- Primary Key structure for table team_members
-- ----------------------------
ALTER TABLE "public"."team_members" ADD CONSTRAINT "team_members_pkey" PRIMARY KEY ("id_member");

-- ----------------------------
-- Primary Key structure for table team_ppi
-- ----------------------------
ALTER TABLE "public"."team_ppi" ADD CONSTRAINT "team_ppi_pkey" PRIMARY KEY ("id_team");

-- ----------------------------
-- Primary Key structure for table user
-- ----------------------------
ALTER TABLE "public"."user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table advisory_students_ppi
-- ----------------------------
ALTER TABLE "public"."advisory_students_ppi" ADD CONSTRAINT "fk_advisory_teacher" FOREIGN KEY ("id_teacher") REFERENCES "public"."teacher" ("id_teacher") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."advisory_students_ppi" ADD CONSTRAINT "fk_advisory_team" FOREIGN KEY ("id_team") REFERENCES "public"."team_ppi" ("id_team") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table notes_quadrant
-- ----------------------------
ALTER TABLE "public"."notes_quadrant" ADD CONSTRAINT "fk_notes_quadrant_id_teacher" FOREIGN KEY ("id_teacher") REFERENCES "public"."teacher" ("id_teacher") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."notes_quadrant" ADD CONSTRAINT "fk_notes_quadrant_id_tm" FOREIGN KEY ("id_tm") REFERENCES "public"."team_members" ("id_member") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table socialization
-- ----------------------------
ALTER TABLE "public"."socialization" ADD CONSTRAINT "fk_socialization_id_team_ppi" FOREIGN KEY ("id_team_ppi") REFERENCES "public"."team_ppi" ("id_team") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table student
-- ----------------------------
ALTER TABLE "public"."student" ADD CONSTRAINT "fk_user_student" FOREIGN KEY ("id_user") REFERENCES "public"."user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table teacher
-- ----------------------------
ALTER TABLE "public"."teacher" ADD CONSTRAINT "fk_user_techer" FOREIGN KEY ("id_user") REFERENCES "public"."user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table team_members
-- ----------------------------
ALTER TABLE "public"."team_members" ADD CONSTRAINT "fk_student_member" FOREIGN KEY ("id_student") REFERENCES "public"."student" ("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."team_members" ADD CONSTRAINT "fk_team_member" FOREIGN KEY ("id_team") REFERENCES "public"."team_ppi" ("id_team") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table team_ppi
-- ----------------------------
ALTER TABLE "public"."team_ppi" ADD CONSTRAINT "fk_team_ppi_id_semester" FOREIGN KEY ("id_semester") REFERENCES "public"."semester" ("id_semester") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."team_ppi" ADD CONSTRAINT "fk_team_ppi_sun_course" FOREIGN KEY ("id_sun_course") REFERENCES "public"."course" ("id_course") ON DELETE RESTRICT ON UPDATE CASCADE;
