import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenancyModule } from './modules/tenancy/tenancy.module';
import { UserModule } from './modules/public/user/user.module';
import { ProductModule } from './modules/tenant/product/product.module';

import * as ormConfig from './shared/config/orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), TenancyModule, UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
