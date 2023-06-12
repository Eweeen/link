import { DataSource } from 'typeorm';
import { Portfolio } from './entities/portfolio.entity';
import { Injectable } from '@nestjs/common';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';

@Injectable()
export class PortfoliosService {
  constructor(private dataSource: DataSource) {}

  portfoliosRepository() {
    return this.dataSource.getRepository(Portfolio);
  }

  async create(createRequest: CreatePortfolioDto): Promise<Portfolio> {
    const portfolio = await this.portfoliosRepository().save({
      title: createRequest.title,
      description: createRequest.description,
      type: createRequest.type,
      path: createRequest.path,
      user: { id: createRequest.user_id },
    });

    return await this.findOne(portfolio.id);
  }

  async findOne(id: number): Promise<Portfolio> {
    return await this.portfoliosRepository().findOne({
      where: { id },
      relations: {
        user: true,
      },
    });
  }
}
