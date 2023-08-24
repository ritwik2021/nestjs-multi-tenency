import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function configureSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .addBearerAuth()
    .addOAuth2()
    .setTitle('MultiTenancy 1.0 APIs')
    .setDescription('MultiTenancy backend api documentation')
    .setVersion('1.0')
    .addTag('MultiTenancy')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: false
  });
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha'
    }
  });
}
