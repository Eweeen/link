import { config } from 'dotenv';
config({ path: 'config.env' });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { HttpExceptionFilter } from './common/http-exception.filter';
import path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Pipe to transform variable with the good type
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      skipMissingProperties: true,
    }),
  );

  // Security
  app.enableCors({ origin: process.env.APP_URL, credentials: true });
  app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
  app.disable('x-powered-by');

  // Disable swagger in production
  if (process.env.NODE_ENV !== 'production') {
    // Swagger
    const config = new DocumentBuilder()
      .setTitle('Link API | Projet MDS')
      .setDescription('API Design with NestJs')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/v1/docs', app, document, {
      customSiteTitle: 'Link API',
      customCssUrl: '/css/swagger-custom.css',
      customJs: '/js/inject-js.js',
    });
  }

  // Add api prefix to all routes
  app.setGlobalPrefix('api');
  // Enable versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });
  if (path) app.useStaticAssets(path.join(__dirname, '/../public'));

  // Use HttpExceptionFilter to handle exceptions globally
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT);
}
bootstrap();
