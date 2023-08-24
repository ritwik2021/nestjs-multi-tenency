import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

import { AbstractBaseEntity } from '../../../../shared/entity/abstract-base.entity';

@Entity('product')
export class Product extends AbstractBaseEntity {
  @ApiProperty({ description: 'Product Name' })
  @Column({ nullable: false })
  name: string;

  @ApiProperty({ description: 'Product Type' })
  @Column({ nullable: false })
  type: string;

  @ApiProperty({ description: 'Product Description' })
  @Column({ nullable: true })
  description: string;
}
