import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Area } from './entities/area.entity';

@Injectable()
export class AreasService {
  
  constructor(
    @InjectRepository(Area)
    private areaRepository: Repository<Area>,
  ) {}

  create(createAreaDto: CreateAreaDto) {
    return this.areaRepository.save(createAreaDto);
  }

  findAll() {
    return this.areaRepository.find();
  }

  findOne(id: number) {
    return this.areaRepository.findOneBy({id: id});
  }

  update(id: number, updateAreaDto: UpdateAreaDto) {
    return this.areaRepository.update(id, updateAreaDto);
  }

  remove(id: number) {
    return this.areaRepository.delete(id);
  }
}
