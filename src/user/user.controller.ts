import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { AssignVoteDto, CreateVoteDto, LoginUserDto, RegisterUserDto } from './dto/userDto.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAllUsers(){
    return this.userService.findAllUsers();
  }

  @Post('login')
  login(@Body() data:LoginUserDto){
    return this.userService.login(data);
  }

  @Post('registerUser')
  registerUser(@Body() data:RegisterUserDto){
    return this.userService.registerUser(data);
  }

  @Post('createVote')
  createVote(@Body() data:CreateVoteDto){
    return this.userService.createVote(data);
  }

  @Post('assignVote')
  assignVote(@Body() data:AssignVoteDto){
    return this.userService.assignVote(data);
  }
}