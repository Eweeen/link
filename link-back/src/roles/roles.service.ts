import { Injectable } from '@nestjs/common';
import { Role } from '../roles/entities/role.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(private dataSource: DataSource) {}

  rolesRepository() {
    return this.dataSource.getRepository(Role);
  }

  public async getAllRole(): Promise<Role[]> {
    return await this.rolesRepository().find();
  }
}
