import { RegisterUserDto } from './dto/register-user.dto';
import { LoginService } from './services/login.service';
import { loginResponse } from './interfaces/login-response.interface';
import { RegisterService } from './services/register.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private registerService: RegisterService,
    private loginService: LoginService,
  ) {}

  async registerUser(registerUserDto: RegisterUserDto) {
    return await this.registerService.register(registerUserDto);
  }

  async loginUser(registerUserDto: RegisterUserDto): Promise<loginResponse> {
    const userData = await this.loginService.checkPassword(registerUserDto);
    console.log('\n\n\n');
    console.log('userData: ', userData);
    console.log('\n\n\n');

    return await this.loginService.generateToken(userData.id, userData.role.id);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
