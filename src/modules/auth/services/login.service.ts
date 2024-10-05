import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from '../dto/register-user.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async checkPassword(registerUserDto: RegisterUserDto): Promise<User> {
    console.log('registerUserDto: ', registerUserDto);
    const userData = await this.userRepository.findOne({
      where: { email: registerUserDto.email },
      relations: ['role'],
    });

    if (registerUserDto.password !== userData.password) {
      throw new UnauthorizedException('Invalid password');
    }

    return userData;
  }

  async generateToken(userId: number, userRoleId: number) {
    const payload = { userId, userRoleId };
    const access_token = await this.jwtService.signAsync(payload);
    return {
      message: 'This is your token',
      access_token: access_token,
    };
  }
}
