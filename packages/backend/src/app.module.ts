import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlashcardsModule } from './flashcards/flashcards.module';
import { PrismaModule } from './prisma/prisma.module';
import { EntityExistsMiddleware } from './common/middleware/entity-exists.middleware';
import { TestsModule } from './tests/tests.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FlashcardsModule,
    PrismaModule,
    TestsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EntityExistsMiddleware)
      .forRoutes('flashcards/:id', 'tests/:id');
  }
}
