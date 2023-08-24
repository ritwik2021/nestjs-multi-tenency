import { Global, Module, Scope } from '@nestjs/common';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';

import { CONNECTION } from './tenancy.symbols';
import { getTenantConnection } from './tenancy.utils';

interface CustomRequest extends Request {
  tenantId?: string;
}

const connectionFactory = {
  provide: CONNECTION,
  scope: Scope.REQUEST,
  useFactory: (request: CustomRequest) => {
    const { tenantId } = request;
    return tenantId ? getTenantConnection(tenantId) : null;
  },
  inject: [REQUEST]
};

@Global()
@Module({
  providers: [connectionFactory],
  exports: [CONNECTION]
})
export class TenancyModule {}
