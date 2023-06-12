import { Module } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { PortfoliosController } from './portfolios.controller';

@Module({
  imports: [],
  providers: [PortfoliosService],
  exports: [PortfoliosService],
  controllers: [PortfoliosController],
})
export class PortfoliosModule {}
