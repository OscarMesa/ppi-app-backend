import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentsService } from '../services/students.service';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto): object {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll(): object[] {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): object {
    return this.studentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ): object {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return this.studentsService.remove(+id);
  }
}
