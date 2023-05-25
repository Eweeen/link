import { Global, Module, UseFilters } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { CommandModule } from 'nestjs-command';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { HttpExceptionFilter } from './common/http-exception.filter';
import { DatabaseModule } from './database/database.module';
import { SeederCommand } from './database/seeder';
import { RoleModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { GenresModule } from './genres/genres.module';
import { GenresUsersModule } from './genres-users/genres-users.module';
import { InspirationsModule } from './inspirations/inspirations.module';
import { GenresService } from './genres/genres.service';
import { GenresUsersService } from './genres-users/genres-users.service';
import { InspirationsService } from './inspirations/inspirations.service';
import { ProfessionsModule } from './professions/professions.module';
import { ProfessionsService } from './professions/professions.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'config.env',
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),

    // ? 100 requests from the same IP can be made to a single endpoint in 1 minute.
    // ? That global limit is applied to all endpoints except the ones that have a specific limit.
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 100,
    }),

    // !============================================================
    // !   DATABASE FOR THE APP IS DEFINED IN THE DATABASE MODULE
    // !============================================================
    DatabaseModule,
    CommandModule,
    AuthModule,
    RoleModule,
    UsersModule,
    GenresModule,
    GenresUsersModule,
    InspirationsModule,
    ProfessionsModule,
  ],
  providers: [
    // ? Use the ThrottlerGuard to prevent too many requests from the same IP.
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    UsersService,
    GenresService,
    GenresUsersService,
    InspirationsService,
    ProfessionsService,
    SeederCommand,
  ],
  exports: [
    UsersService,
    GenresService,
    GenresUsersService,
    InspirationsService,
    ProfessionsService,
    SeederCommand,
  ],
  controllers: [AppController],
})
@UseFilters(HttpExceptionFilter)
export class AppModule {}
