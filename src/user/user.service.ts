import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import {
  AssignVoteDto,
  CreateVoteDto,
  RegisterUserDto,
} from './dto/userDto.dto';
import { Vote } from 'src/vote/entity/vote.entity';
import { CurrentVote } from 'src/current-vote/entity/current-vote.entity';

@Injectable()
export class UserService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Vote)
    private voteRepository: Repository<Vote>,
    @InjectRepository(CurrentVote)
    private CurrentVoteRepository: Repository<CurrentVote>,
  ) {}

  async login(data) {
    const { name, password } = data;
    const user = await this.userRepository.findOne({ where: { name } });
    if (!user) {
      throw new HttpException('user name not fount', 404);
    }

    const checkPassword = await compare(password, user.password);
    if (!checkPassword) {
      throw new HttpException('invalid password', 404);
    }

    const payload = {
      id_user: user.id_user,
      user:user.name,
      user_type:user.user_type,
    };

    const token = this.jwtService.sign(payload, {
      expiresIn: '7h',
    });


    return { token };
  }

  async registerUser(data: RegisterUserDto) {
    const { name, mail } = data;
    if (await this.userRepository.findOne({ where: { name } })) {
      throw new HttpException('user already exist', 403);
    }

    const password = this.generatePassword();
    const hashedpassword = await hash(password, 10);

    const user = this.userRepository.create({
      ...data,
      password: hashedpassword,
      user_type: 2,
    });

    this.userRepository.save(user);
    return { message: `user register successfully ${password}` };
  }

  async createVote(data: CreateVoteDto) {
    const { name } = data;
    const vote = this.voteRepository.findOne({ where:{name} })

    if(!vote){
      return{message:'that name already use'}
    }

    this.voteRepository.save(this.voteRepository.create(data));
    return { message: 'vote register successfully' };
  }

  async assignVote(data: AssignVoteDto) {
    const { id_user, id_vote } = data;
    const assign = await this.CurrentVoteRepository.findOne({ where:{ id_user,id_vote}})

    if(assign){
      return{message:'that assignacion has already been made'}
    }

    this.CurrentVoteRepository.save(this.CurrentVoteRepository.create(data))

    return { message: 'assign vote successfully' };
  }

  findAllUsers() {
    const user = this.userRepository.find({
      order: { name: 'ASC' },
    });

    return user;
  }

  generatePassword() {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array(8)
      .fill('')
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join('');
  }
}
