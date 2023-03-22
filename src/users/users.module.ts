import { AdvisoryStudentsPpi } from '@entities/advisory.students.ppi.entity';
import { Course } from '@entities/course.entity';
import { Student } from '@entities/student.entity';
import { Teacher } from '@entities/teacher.entity';
import { TeamMembers } from '@entities/team.members.entity';
import { TeamPpi } from '@entities/team.ppi.entity';
import { User } from '@entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controller/users.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Student, Teacher, TeamMembers, TeamPpi, Course, AdvisoryStudentsPpi])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
