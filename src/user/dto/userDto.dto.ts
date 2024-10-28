import { IsString } from "class-validator";

export class LoginUserDto {

    @IsString()
    name:string;

    @IsString()
    password:string;

}

export class RegisterUserDto {

    @IsString()
    name:string;

    @IsString()
    mail:string;

}

export class CreateVoteDto {

    @IsString()
    name:string;

}

export class AssignVoteDto {

    @IsString()
    id_user:number;

    @IsString()
    id_vote:number;

}