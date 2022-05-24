import { UserType } from '@prisma/client';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Matches,
  IsEnum,
  IsOptional,
} from 'class-validator';

export class SignupDto {
  @IsString({ message: '문자만 가능합니다.' })
  @IsNotEmpty({ message: '반드시 이름을 입력해야합니다.' })
  name: string;

  @Matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, {
    message: '올바른 휴대폰 형식을 입력하세요.',
  })
  phone: string;

  @IsEmail()
  email: string;

  @IsString({ message: '문자만 가능합니다.' })
  @MinLength(5, { message: '최소 5자리 입력해야합니다.' })
  password: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  productKey?: string;
}

export class SigninDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class GenerateProductKeyDto {
  @IsEmail()
  email: string;

  @IsEnum(UserType)
  userType: UserType;
}
