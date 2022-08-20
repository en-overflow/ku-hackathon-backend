import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvVars } from 'common/interface';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { LectureModule } from './lecture/lecture.module';
import { PhotoController } from './photo/photo.controller';
import { PhotoModule } from './photo/photo.module';
import { PhotoService } from './photo/photo.service';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService<EnvVars>) => ({
        type: 'postgres',
        url: config.get('DB_URL'),
        synchronize: config.get('DB_SYNC'),
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    LectureModule,
    PhotoModule,
  ],
  controllers: [AppController, PhotoController],
  providers: [AppService, PhotoService],
})
export class AppModule {}
