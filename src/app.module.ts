import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoteModule } from './vote/vote.module';
import { UserModule } from './user/user.module';
import { CurrentVoteModule } from './current-vote/current-vote.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { CurrentVote } from './current-vote/entity/current-vote.entity';
import { Vote } from './vote/entity/vote.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'test',
      entities: [User,CurrentVote,Vote],
      synchronize: true,
    }),
    VoteModule,
    UserModule,
    CurrentVoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
