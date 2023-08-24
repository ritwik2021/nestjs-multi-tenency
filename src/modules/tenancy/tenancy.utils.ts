import { Connection, createConnection, getConnectionManager } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import * as tenantsOrmConfig from '../../shared/config/tenant-orm.config';

export async function getTenantConnection(tenantId: string): Promise<Connection> {
  const connectionName = `tenant_${tenantId}`;
  const connectionManager = getConnectionManager();

  if (connectionManager.has(connectionName)) {
    const connection = connectionManager.get(connectionName);
    return connection.isConnected ? connection : connection.connect();
  }

  try {
    return await createConnection({
      ...(tenantsOrmConfig as PostgresConnectionOptions),
      name: connectionName,
      schema: connectionName
    });
  } catch (error) {
    console.error(error.message);
  }
}
