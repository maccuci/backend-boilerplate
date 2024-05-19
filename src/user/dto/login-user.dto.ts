import { IsString } from "class-validator";
import { Dto } from "src/lib/dto/Dto";

export class LoginUserDto extends Dto<LoginUserDto> {
    @IsString()
    email: string;

    @IsString()
    key: string;
}