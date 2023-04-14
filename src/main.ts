import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {



  const app = await NestFactory.create(AppModule,);
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'http://localhost:3001',
    credentials: true,
  });
    
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');
  app.enableVersioning({type: VersioningType.URI,});
  
  const config = new DocumentBuilder()
  .setTitle('Producers and Farms')
  .setDescription('The brain culture API description')
  .setVersion('1.0')
  .addTag('farms')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000/api/v1`);
}
bootstrap();