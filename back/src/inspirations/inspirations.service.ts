import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Inspiration } from './entities/inspiration.entity';
import { CreateInspirationDto } from './dto/create-inspiration.dto';

@Injectable()
export class InspirationsService {
  constructor(private dataSource: DataSource) {}

  inspirationsRepository() {
    return this.dataSource.getRepository(Inspiration);
  }

  async create(
    createInspirationRequest: CreateInspirationDto,
  ): Promise<Inspiration> {
    const inspiration = await this.inspirationsRepository().save({
      name: createInspirationRequest.name,
      user: { id: createInspirationRequest.user_id },
    });

    return await this.findOne(inspiration.id);
  }

  async findOne(id: number): Promise<Inspiration> {
    return await this.inspirationsRepository().findOne({
      where: { id },
      relations: { user: true },
    });
  }
}
