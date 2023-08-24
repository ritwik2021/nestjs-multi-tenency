import * as ormConfig from './orm.config';

import { join } from 'path';

module.exports = {
  ...ormConfig,
  entities: [join(__dirname, '../../modules/tenant/**/entities/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '../../migrations/tenant/*{.ts,.js}')]
};
