import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { GenresUsersService } from './genres-users.service';

@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [GenresUsersService],
  exports: [GenresUsersService],
  controllers: [],
})
export class GenresUsersModule {}
