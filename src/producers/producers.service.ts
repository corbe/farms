import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';
import { Producer } from './entities/producer.entity';

@Injectable()
export class ProducersService {

  constructor(
    @InjectRepository(Producer)
    private producerRepository: Repository<Producer>,
  ) {}

  create(updateProducerDto: CreateProducerDto) {
    return this.producerRepository.save(updateProducerDto);
  }

  findAll() {
    return this.producerRepository.find({
      relations: ['farms', 'farms.areas','farms.areas.area']
    });  
  }

  findOne(id: number) {
    return this.producerRepository.findOne(
      {
        where: {id: id},
        relations: ['farms', 'farms.areas','farms.areas.area']
      }
    ); 
  }

  async update(id: number, updateProducerDto: UpdateProducerDto) {

    let res: UpdateResult = new UpdateResult();
    let producer = await this.findOne(id);

    if (!producer){
      res.affected = 0;
      return res;
    }
    updateProducerDto.id = id;
    await this.producerRepository.save(updateProducerDto);

    res.affected = 1;
    return res;
  }

  remove(id: number) {
    return this.producerRepository.delete(id);
  }
}