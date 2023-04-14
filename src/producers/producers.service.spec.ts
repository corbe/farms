import { Test, TestingModule } from '@nestjs/testing';
import { ProducersService } from './producers.service';
import { CreateProducerDto  } from './dto/create-producer.dto';
import { Producer } from './entities/producer.entity';

describe('ProducersService', () => {
  let service: ProducersService;

  const mockProducer: CreateProducerDto = 
    {
      "name": "Daniel Corbe",
      "document": "29274734808",
      "farms": [
         { 
             "name": "FAzenda do Dani",
             "city": "São Paulo",
             "state": "SP",
             "totalArea": 30,
             "totalVegetationArea": 3,
             "areas": [
                 {  
                      "area": {
                          "id": 1
                      },
                      "value":11
                 },
                  {  
                      "area": {
                          "id": 2
                      },
                      "value":11
                 }
              ]
          },
           { 
             "name": "Fazenda do Daniel",
             "city": "São Paulo",
             "state": "SP",
             "totalArea": 30,
             "totalVegetationArea": 3,
             "areas": [
                
                   {  
                      "area": {
                          "id": 1
                      },
                      "value":2
                 }
              ]
          }
          
      ]
    };
  
  const mockAffected = {
      affected: 1
  }
  
  beforeAll(async () => {
    
    const module: TestingModule = await Test.createTestingModule({   
      providers: [
          {
            provide: ProducersService,
            useValue: {
              findAll: jest.fn().mockResolvedValue([]),
              findOne: jest.fn().mockResolvedValue(mockProducer),
              create: jest.fn().mockResolvedValue(mockProducer),
              update: jest.fn().mockResolvedValue(mockAffected),
              remove: jest.fn().mockResolvedValue(mockAffected),
            }
          }
        ],
    }).compile();

    service = module.get<ProducersService>(ProducersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('returns empty array', async () => {
      expect(await service.findAll()).toStrictEqual([]);
    });
  });

  describe('create producer', () => {
    it('it should register a producer and return the new producer object', async () => {
      const spy = jest.spyOn(service, 'create')
      expect(await service.create(mockProducer)).toEqual(mockProducer);
      expect(spy).toBeCalledWith(mockProducer);    
    });
  });

  describe('findAll', () => {
    it('it should return founds producers', async () => {
      expect(await service.findAll()).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('it should return found producer by id', async () => {
      expect(await service.findOne(1)).toEqual(mockProducer);
    });
  });

  describe('update', () => {
    it('it should update a producer and return one affected row object', async () => {
      const spy = jest.spyOn(service, 'update')
      expect(await service.update(1, mockProducer)).toEqual(mockAffected);
      expect(spy).toBeCalledWith(1,mockProducer); 
    });
  });

  describe('remove', () => {
    it('sit should remove a producer and return one affected row object', async () => {
      const spy = jest.spyOn(service, 'remove')
      expect(await service.remove(1)).toEqual(mockAffected);
      expect(spy).toBeCalledWith(1); 
    });
  });
});