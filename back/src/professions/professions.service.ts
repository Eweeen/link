import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Profession } from './entities/profession.entity';

@Injectable()
export class ProfessionsService {
  constructor(private dataSource: DataSource) {}

  professionsRepository() {
    return this.dataSource.getRepository(Profession);
  }

  async findAll(): Promise<Profession[]> {
    return await this.professionsRepository().find();
  }
}
