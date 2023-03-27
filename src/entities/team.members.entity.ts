import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Student } from './student.entity';
import { TeamPpi } from './team.ppi.entity';

@Index('team_members_pkey', ['idMember'], { unique: true })
@Entity('team_members', { schema: 'public' })
export class TeamMembers {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_member' })
  idMember: number;

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

  @ManyToOne(() => Student, (student) => student.teamMembers, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'id_student', referencedColumnName: 'studentId' }])
  idStudent: Student;

  @ManyToOne(() => TeamPpi, (teamPpi) => teamPpi.teamMembers, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'id_team', referencedColumnName: 'idTeam' }])
  idTeam: TeamPpi;
}
