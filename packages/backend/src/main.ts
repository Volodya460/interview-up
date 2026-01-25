import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/httpExceptionFilter';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // убирает лишние поля из body
      forbidNonWhitelisted: true, // бросает ошибку, если пришли лишние поля
      transform: true, // преобразует строки в числа и т.п.
    }),
  );
  app.use(cookieParser());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT ?? 3001);
  console.log(`🚀 Backend is running`);
}

bootstrap().catch((err) => {
  console.log('❌ Failed to start application:', err);
});
