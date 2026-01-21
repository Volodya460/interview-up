import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EmailSenderModule } from 'src/email-sender/email-sender.module';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AtStrategy } from './strategies/at.strategy';
import { RtStrategy } from './strategies/rf.strategy';

@Module({
  imports: [
    PrismaModule,
    EmailSenderModule,
    UserModule,
    JwtModule.register({}),
  ],
  providers: [AuthService, AtStrategy, RtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
