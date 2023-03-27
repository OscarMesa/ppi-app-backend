import { UserDTO } from '@auth/dto/user.dto';
import { AuthService } from '@auth/services/auth.service';
import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private authService: AuthService) {}

  @ApiOkResponse({ schema: { example: { isAuthenticate: true, status: 200 } } })
  @Post('create')
  public async createUser(
    @Req() req: Request,
    @Body() userDto: UserDTO,
  ): Promise<object> {
    return await this.authService.createUser(userDto);
  }
}
