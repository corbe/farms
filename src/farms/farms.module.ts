import { Module } from '@nestjs/common';
import { FarmsService } from './farms.service';
import { FarmsController } from './farms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farm } from './entities/farm.entity';
import { AreaValue } from './entities/area.value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Farm, AreaValue])],
  controllers: [FarmsController],
  providers: [FarmsService]
})
export class FarmsModule {}