import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Example title for API')
    .setDescription('This API has a CRUD as example in order to learn the basis for NestJS, MongoDB and TypeORM')
    .setVersion('1.0')
    .addTag('users')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1', app, document); // "api/v1" es la ruta donde se almacenara la documentacion
  
  const port = 3000;
  await app.listen(port);
  console.log(`Server running on port http://localhost:${port}`);
}
bootstrap();
