import { NestFactory } from '@nestjs/core';
import { getConnection, getManager } from 'typeorm';

import { AppModule } from './app.module';
import { getTenantConnection } from './modules/tenancy/tenancy.utils';
import { tenancyMiddleware } from './modules/tenancy/tenancy.middleware';
import { configureSwagger } from './shared/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(tenancyMiddleware);

  // Run migrations for the default connection
  await getConnection().runMigrations();

  // Get a list of tenant schemas
  const tenantSchemas = await getManager().query(
    "SELECT schema_name as name FROM information_schema.schemata WHERE schema_name LIKE 'tenant_%';"
  );

  // Run migrations for tenant-specific connections
  await Promise.all(
    tenantSchemas.map(async (tenantSchema) => {
      const { name: schema } = tenantSchema;
      const tenantId = schema.replace('tenant_', '');

      const connection = await getTenantConnection(tenantId);
      await connection.runMigrations();
      await connection.close();
    })
  );

  // swagger middleware
  configureSwagger(app);

  await app.listen(3000);
}
bootstrap();
