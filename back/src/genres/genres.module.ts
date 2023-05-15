import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';

@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [GenresService],
  exports: [GenresService],
  controllers: [GenresController],
})
export class GenresModule {}
