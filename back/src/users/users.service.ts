import { Injectable } from '@nestjs/common';
import { hashSync } from 'bcryptjs';
import { DataSource, Equal } from 'typeorm';
import { SignUpDto } from './dto/sign-up.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { PaginatedUsers } from './users.interface';

@Injectable()
export class UsersService {
  constructor(private dataSource: DataSource) {}

  usersRepository() {
    return this.dataSource.getRepository(User);
  }

  async signUp(signUpRequest: SignUpDto): Promise<User> {
    const user = await this.usersRepository().save({
      lastname: signUpRequest.lastname,
      firstname: signUpRequest.firstname,
      username: signUpRequest.username,
      email: signUpRequest.email,
      password: hashSync(signUpRequest.password, 10),
      image: 'default.webp',
      birth_date: signUpRequest.birth_date,
      city: signUpRequest.city,
      color: '#000000',
      role: { id: 3 },
      profession: { id: signUpRequest.profession_id },
    });

    return await this.findOne(user.id);
  }

  async findAll(page?: number): Promise<PaginatedUsers> {
    const [users, nbLines] = await this.usersRepository().findAndCount({
      skip: page ? 25 * (page - 1) : 0,
      take: page ? 25 : 99999,
      relations: {
        role: true,
      },
    });

    return {
      nbPages: page ? Math.ceil(nbLines / 25) : 1,
      result: users,
    };
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository().findOne({
      where: { id },
      relations: {
        role: true,
        profession: true,
        inspirations: true,
        skills: true,
        portfolios: true,
      },
    });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.usersRepository().findOne({
      where: { email: Equal(email) },
      relations: { role: true },
    });
  }

  async findOneByUsername(username: string): Promise<User> {
    return await this.usersRepository().findOne({
      where: { username: username },
      relations: {
        role: true,
        profession: true,
        inspirations: true,
        skills: true,
        portfolios: true,
      },
    });
  }

  async update(id: number, updateRequest: UpdateUserDto): Promise<User> {
    await this.usersRepository().update(id, {
      lastname: updateRequest.lastname,
      firstname: updateRequest.firstname,
      username: updateRequest.username,
      description: updateRequest.description,
      email: updateRequest.email,
      image: updateRequest.image,
      birth_date: updateRequest.birth_date,
      city: updateRequest.city,
    });

    return await this.findOne(id);
  }

  async updateRole(id: number, roleId: number): Promise<User> {
    await this.usersRepository().update(id, {
      role: { id: roleId },
    });

    return await this.findOne(id);
  }

  async updatePassword(id: number, password: string): Promise<void> {
    await this.usersRepository().update(id, {
      password: hashSync(password, 10),
    });
  }

  async softDelete(id: number): Promise<User> {
    const user = await this.usersRepository().findOneBy({ id });
    return await this.usersRepository().softRemove(user);
  }

  async restore(id: number): Promise<User> {
    const user = await this.usersRepository().findOneBy({ id });
    return await this.usersRepository().recover(user);
  }

  // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\
  // /!\/!\/!\ DON'T USE THIS (ITS ONLY FOR AUTH (PASSWORD IN THE RESULT) /!\/!\/!\
  // /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\

  async findOneAuthentification(username: string): Promise<User> {
    return await this.usersRepository().findOne({
      select: [
        'id',
        'lastname',
        'firstname',
        'username',
        'description',
        'email',
        'password',
        'image',
        'birth_date',
        'city',
      ],
      where: [{ username: username }, { email: Equal(username) }],
      relations: {
        role: true,
      },
    });
  }
}
