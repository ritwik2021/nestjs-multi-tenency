import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index } from 'typeorm';

import { AbstractBaseEntity } from '../../../../shared/entity/abstract-base.entity';

@Entity('users')
export class User extends AbstractBaseEntity {
  @ApiProperty({ description: "The user's full name.", example: 'John Doe' })
  @Column({ nullable: false })
  name: string;

  @ApiProperty({ description: "The user's email address.", example: 'john.doe@example.com' })
  @Column({ unique: true })
  @Index('user-email-idx')
  email: string;

  @ApiProperty({ description: "The user's password (hashed)." })
  @Column({ nullable: false })
  password: string;

  //   @ApiProperty({ description: 'Whether the user is blocked or not.', example: false })
  //   @Column({ default: false })
  //   isBlocked: boolean;

  //   @ApiProperty({ description: 'The user status (active or inactive).', example: true })
  //   @Column({ default: true })
  //   status: boolean;

  //   @ApiProperty({ description: "The timestamp of the user's last login.", example: 1627910623 })
  //   @Column({ type: 'float', default: Math.floor(Date.now() / 1000) })
  //   lastLoginTime: number;
}
