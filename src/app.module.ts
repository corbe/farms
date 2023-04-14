import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmsModule } from './farms/farms.module';
import { ProducersModule } from './producers/producers.module';
import { AreasModule } from './areas/areas.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DbValidatorsModule } from '@youba/nestjs-dbvalidator';
import { ConfigModule } from '@nestjs/config';
import { Area } from './areas/entities/area.entity';
import { Dashboard } from './dashboard/entities/dashboard.entity';
import { DashboardTotalFarmsAreaType } from './dashboard/entities/dashboard.total-farms-area-type.entity';
import { DashboardTotalFarmsPlantingType } from './dashboard/entities/dashboard.total-farms-planting-type.entity';
import { DashboardTotalFarmsState } from './dashboard/entities/dashboard.total-farms-state.entity';
import { DashboardTotalFarms } from './dashboard/entities/dashboard.total-farms.entity';
import { AreaValue } from './farms/entities/area.value.entity';
import { Farm } from './farms/entities/farm.entity';
import { Producer } from './producers/entities/producer.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: false
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      logging: false,
      entities: [
          Producer,
          Farm,
          Area,
          AreaValue,
          Dashboard,
          DashboardTotalFarms,
          DashboardTotalFarmsState,
          DashboardTotalFarmsPlantingType,
          DashboardTotalFarmsAreaType
      ]
    }),
    DbValidatorsModule.register({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
  }),
    FarmsModule, 
    ProducersModule, 
    AreasModule, 
    DashboardModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}