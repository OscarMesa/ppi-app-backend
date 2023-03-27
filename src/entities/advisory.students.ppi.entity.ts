import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Teacher } from './teacher.entity';
import { TeamPpi } from './team.ppi.entity';

@Index('advisory_students_ppi_pkey', ['idAdvisory'], { unique: true })
@Entity('advisory_students_ppi', { schema: 'public' })
export class AdvisoryStudentsPpi {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_advisory' })
  idAdvisory: number;

  @Column('json', { name: 'individual_assistance', nullable: true })
  individualAssistance: object | null;

  @Column('timestamp with time zone', {
    name: 'advisory_date assigned',
    nullable: true,
  })
  advisoryDateAssigned: Date | null;

  @Column('text', { name: 'observations', nullable: true })
  observations: string | null;

  @Column('timestamp with time zone', {
    name: 'createAt',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date | null;

  @Column('timestamp with time zone', {
    name: 'updateAt',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date | null;

  @ManyToOne(() => Teacher, (teacher) => teacher.advisoryStudentsPpis, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'id_teacher', referencedColumnName: 'idTeacher' }])
  idTeacher: Teacher;

  @ManyToOne(() => TeamPpi, (teamPpi) => teamPpi.advisoryStudentsPpis, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'id_team', referencedColumnName: 'idTeam' }])
  idTeam: TeamPpi;
}
