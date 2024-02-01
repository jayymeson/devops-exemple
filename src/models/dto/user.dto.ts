import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class User {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Jaymeson Mendes',
    description: 'Name of user',
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'teste@email.com',
    description: 'Email of user',
  })
  email: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 28,
    description: 'Age of user',
  })
  age: string;
}
