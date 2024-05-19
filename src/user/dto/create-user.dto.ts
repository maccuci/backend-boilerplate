import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { randomUUID, UUID } from 'crypto';
import { Dto } from 'src/lib/dto/Dto';

export class CreateUserDto extends Dto<CreateUserDto> {
  
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsNotEmpty()
  email: string;
  
  @IsUUID()
  uid: UUID = randomUUID();
}
