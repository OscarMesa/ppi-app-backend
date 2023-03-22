import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TeamMembers } from "./team.members.entity";
import { User } from "./user.entity";

@Index("student_pkey", ["studentId"], { unique: true })
@Entity("student", { schema: "public" })
export class Student {
  @PrimaryGeneratedColumn({ type: "integer", name: "student_id" })
  studentId: number;

  @Column("character varying", {
    name: "document",
    nullable: true,
    length: 255,
  })
  document: string | null;

  @Column("enum", {
    name: "type_document",
    nullable: true,
    enum: ["cc", "ce", "nip", "nit", "ti", "pap"],
  })
  typeDocument: "cc" | "ce" | "nip" | "nit" | "ti" | "pap" | null;

  @Column("character varying", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("character varying", {
    name: "lastname",
    nullable: true,
    length: 255,
  })
  lastname: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("date", { name: "birth_date", nullable: true })
  birthDate: string | null;

  @Column("enum", { name: "gender", nullable: true, enum: ["male", "female"] })
  gender: "male" | "female" | null;

  @Column("enum", {
    name: "education_level",
    nullable: true,
    enum: [
      "initial",
      "preschool",
      "primary_basic",
      "basic_high_school",
      "technical_medium",
      "professional_technique",
      "technological",
      "higher_university",
      "specialization",
      "mastery",
      "phd",
      "postdoc",
    ],
  })
  educationLevel:
    | "initial"
    | "preschool"
    | "primary_basic"
    | "basic_high_school"
    | "technical_medium"
    | "professional_technique"
    | "technological"
    | "higher_university"
    | "specialization"
    | "mastery"
    | "phd"
    | "postdoc"
    | null;

  @Column("character varying", {
    name: "educational_institution",
    nullable: true,
    length: 255,
  })
  educationalInstitution: string | null;

  @Column("timestamp with time zone", {
    name: "createAt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createAt: Date | null;

  @Column("timestamp with time zone", {
    name: "updateAt",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updateAt: Date | null;

  @ManyToOne(() => User, (user) => user.students, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id_user", referencedColumnName: "id" }])
  idUser: User;

  @OneToMany(() => TeamMembers, (teamMembers) => teamMembers.idStudent)
  teamMembers: TeamMembers[];
}
