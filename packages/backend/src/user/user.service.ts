import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  createUser(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  findByUsername(username: string) {
    return this.prisma.user.findUnique({ where: { username } });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findByVerify(verificationCode: string) {
    return this.prisma.user.findUnique({ where: { verificationCode } });
  }
  updateUserVerify(verificationCode: string) {
    return this.prisma.user.update({
      where: { verificationCode },
      data: { verify: true, verificationCode: '' },
    });
  }

  updateUserVerifyCode(verificationCode: string, email: string) {
    return this.prisma.user.update({
      where: { email },
      data: { verificationCode },
    });
  }
}
