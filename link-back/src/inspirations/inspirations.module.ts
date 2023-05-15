import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { InspirationsService } from './inspirations.service';

@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [InspirationsService],
  exports: [InspirationsService],
  controllers: [],
})
export class InspirationsModule {}
