import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AdvisoryStudentsPpi } from "./advisory.students.ppi.entity";
import { Course } from "./course.entity";
import { TeamMembers } from "./team.members.entity";

@Index("team_ppi_pkey", ["idTeam"], { unique: true })
@Entity("team_ppi", { schema: "public" })
export class TeamPpi {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_team" })
  idTeam: number;

  @Column("character varying", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("character varying", {
    name: "observations",
    nullable: true,
    length: 255,
  })
  observations: string | null;

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

  @OneToMany(
    () => AdvisoryStudentsPpi,
    (advisoryStudentsPpi) => advisoryStudentsPpi.idTeam
  )
  advisoryStudentsPpis: AdvisoryStudentsPpi[];

  @OneToMany(() => TeamMembers, (teamMembers) => teamMembers.idTeam)
  teamMembers: TeamMembers[];

  @ManyToOne(() => Course, (course) => course.teamPpis, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "id_sun_course", referencedColumnName: "idCourse" }])
  idSunCourse: Course;
}
