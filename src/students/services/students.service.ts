import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';

@Injectable()
export class StudentsService {
  create(createStudentDto: CreateStudentDto): object {
    return createStudentDto;
  }

  findAll(): object[] {
    return [];
  }

  findOne(id: number): object {
    return { id };
  }

  update(id: number, updateStudentDto: UpdateStudentDto): object {
    updateStudentDto.id = id;
    return updateStudentDto;
  }

  remove(id: number): string {
    return `This action removes a #${id} student`;
  }
}
