import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export function createdocument(app: INestApplication): OpenAPIObject {
  const config = new DocumentBuilder()
    .setTitle('ppi-api')
    .setDescription('PPI API')
    .setVersion('1.0')
    .addTag('ppi-api')
    .addServer(`http://localhost:${process.env.PORT}`, 'Local')
    .build();

  return SwaggerModule.createDocument(app, config);
}
