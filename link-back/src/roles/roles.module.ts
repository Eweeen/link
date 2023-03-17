import { Global, Module } from '@nestjs/common';
import { RoleService } from './roles.service';

@Global()
@Module({
  imports: [],
  providers: [RoleService],
  exports: [RoleService],
  controllers: [],
})
export class RoleModule {}
