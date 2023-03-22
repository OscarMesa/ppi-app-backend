import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TeamPpi } from "./team.ppi.entity";

@Index("course_pkey", ["idCourse"], { unique: true })
@Entity("course", { schema: "public" })
export class Course {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_course" })
  idCourse: number;

  @Column("character varying", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("smallint", { name: "semester", nullable: true })
  semester: number | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 255,
  })
  description: string | null;

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

  @OneToMany(() => TeamPpi, (teamPpi) => teamPpi.idSunCourse)
  teamPpis: TeamPpi[];
}
