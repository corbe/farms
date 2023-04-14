import { Test, TestingModule } from '@nestjs/testing';
import { ProducersController } from './producers.controller';
import { ProducersService } from './producers.service';
import { CreateProducerDto } from './dto/create-producer.dto';

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
}


const mockAffected = {
    affected: 1
}


describe('ProducersController', () => {
  let controller: ProducersController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducersController],
      providers: [
        {
          provide: ProducersService,
          useValue: {
            findAll: jest.fn().mockResolvedValue({}),
            findOne: jest.fn().mockResolvedValue(mockAffected),
            create: jest.fn().mockResolvedValue(mockAffected),
            update: jest.fn().mockResolvedValue(mockAffected),
            remove: jest.fn().mockResolvedValue(mockAffected),
          }
        }
      ],
      
    }).compile();

    controller = module.get<ProducersController>(ProducersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create producer', () => {
    it('it should register a producer and return the new producer object', async () => {
      const spy = jest.spyOn(controller, 'create')
      expect(await controller.create(mockProducer)).toEqual(mockAffected);
      expect(spy).toBeCalledWith(mockProducer);    
    });
  });

  describe('findAll', () => {
    it('it should return founds producers', async () => {
      expect(await controller.findAll()).toEqual({});
    });
  });

  describe('findOne', () => {
    it('it should return found producer by id', async () => {
      expect(await controller.findOne('1')).toEqual(mockAffected);
    });
  });

  describe('update', () => {
    it('it should update a producer and return one affected row object', async () => {
      const spy = jest.spyOn(controller, 'update')
      expect(await controller.update('1', mockProducer)).toEqual(mockAffected);
      expect(spy).toBeCalledWith('1',mockAffected); 
    });
  });

  describe('remove', () => {
    it('it should remove a producer and return one affected row object', async () => {
      const spy = jest.spyOn(controller, 'remove')
      expect(await controller.remove('1')).toEqual(mockAffected);
      expect(spy).toBeCalledWith('1'); 
    });
  });

});