import { ApiProperty } from '@nestjs/swagger';

export class UserFirebaseDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  uid: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  roleId: number;

  @ApiProperty()
  documentTypeId: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  document: string;

  constructor({
    firstName,
    lastName,
  }: {
    firstName: string;
    lastName: string;
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
