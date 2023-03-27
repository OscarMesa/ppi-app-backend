import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AdvisoryStudentsPpi } from './advisory.students.ppi.entity';
import { User } from './user.entity';

@Index('teacher_pkey', ['idTeacher'], { unique: true })
@Entity('teacher', { schema: 'public' })
export class Teacher {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_teacher' })
  idTeacher: number;

  @Column('character varying', {
    name: 'document',
    nullable: true,
    length: 255,
  })
  document: string | null;

  @Column('enum', {
    name: 'type_document',
    nullable: true,
    enum: ['cc', 'ce', 'nip', 'nit', 'ti', 'pap'],
  })
  typeDocument: 'cc' | 'ce' | 'nip' | 'nit' | 'ti' | 'pap' | null;

  @Column('character varying', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('character varying', {
    name: 'lastname',
    nullable: true,
    length: 255,
  })
  lastname: string | null;

  @Column('character varying', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('character varying', {
    name: 'area_expertise',
    nullable: true,
    length: 255,
  })
  areaExpertise: string | null;

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

  @OneToMany(
    () => AdvisoryStudentsPpi,
    (advisoryStudentsPpi) => advisoryStudentsPpi.idTeacher,
  )
  advisoryStudentsPpis: AdvisoryStudentsPpi[];

  @ManyToOne(() => User, (user) => user.teachers, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'id_user', referencedColumnName: 'id' }])
  idUser: User;
}
