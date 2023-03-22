import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";
import { Teacher } from "./teacher.entity";


@Entity("user", { schema: "public" })
export class User {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "email", length: 255 })
  email: string;

  @Column("character varying", { name: "password", length: 255 })
  password: string;

  @Column("character varying", { name: "role", length: 100 })
  role: string;

  @Column("timestamp with time zone", {
    name: "createAt",
    default: () => "CURRENT_TIMESTAMP",
  })
  createAt: Date;

  @Column("timestamp with time zone", {
    name: "updateAt",
    default: () => "CURRENT_TIMESTAMP",
  })
  updateAt: Date;

  @OneToMany(() => Student, (student) => student.idUser)
  students: Student[];

  @OneToMany(() => Teacher, (teacher) => teacher.idUser)
  teachers: Teacher[];
}
