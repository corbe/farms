import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { AreaValue } from './entities/area.value.entity';
import { Farm } from './entities/farm.entity';

@Injectable()
export class FarmsService {

  constructor(
    @InjectRepository(Farm)
    private farmRepository: Repository<Farm>,
    @InjectRepository(AreaValue)
    private areaValueRepository: Repository<AreaValue>,
  ) {}

  create(createFarmDto: CreateFarmDto) {
    return this.farmRepository.save(createFarmDto);
  }

  findAll() {
    return this.farmRepository.find({
        relations: ['areas','areas.area']
      });
  }

  findOne(id: number) {
    return this.farmRepository.findOne(
      {
        where: {id: id},
        relations: ['areas', 'areas.area', 'producers']
      }
    ); 
  }

  async update(id: number, updateFarmDto: UpdateFarmDto) {
      let res: UpdateResult = new UpdateResult();
      let farm = await this.findOne(id);

      if (!farm){
        res.affected = 0;
        return res;
      }
      updateFarmDto.id = id;
      await this.farmRepository.save(updateFarmDto);

      res.affected = 1;
      return res;
  }

  remove(id: number) {
    return this.farmRepository.delete(id);
  }
}