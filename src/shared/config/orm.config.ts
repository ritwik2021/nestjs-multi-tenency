import { join } from 'path';

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'test-multi-tenancy',
  logging: false,
  autoLoadEntities: true,
  //   synchronize: true,
  retryAttempts: 2,
  entities: [join(__dirname, '../../modules/public/**/entities/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '../../migrations/public/*{.ts,.js}')]
};
