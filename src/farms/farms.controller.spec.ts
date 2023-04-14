import { Test, TestingModule } from '@nestjs/testing';
import { FarmsController } from './farms.controller';
import { FarmsService } from './farms.service';
import { CreateFarmDto } from './dto/create-farm.dto';

const mockFarm: CreateFarmDto =  
  {
    "name": "Fazenda A",
    "city": "São Paulo",
    "state": "SP",
    "totalArea": 30,
    "totalVegetationArea": 3,

    "areas": [
        {  
            "area": {"id": 1},
            "value":2
      
    }]
  }

const mockAffected = {
    affected: 1
}


describe('FarmsController', () => {
  let controller: FarmsController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmsController],
      providers: [
        {
          provide: FarmsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue({}),
            findOne: jest.fn().mockResolvedValue(mockFarm),
            create: jest.fn().mockResolvedValue(mockFarm),
            update: jest.fn().mockResolvedValue(mockAffected),
            remove: jest.fn().mockResolvedValue(mockAffected),
          }
        }
      ],
      
    }).compile();

    controller = module.get<FarmsController>(FarmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create farm', () => {
    it('it should register a farm and return the new farm object', async () => {
      const spy = jest.spyOn(controller, 'create')
      expect(await controller.create(mockFarm)).toEqual(mockFarm);
      expect(spy).toBeCalledWith(mockFarm);    
    });
  });

  describe('findAll', () => {
    it('it should return founds farms', async () => {
      expect(await controller.findAll()).toEqual({});
    });
  });

  describe('findOne', () => {
    it('it should return found farm by id', async () => {
      expect(await controller.findOne('1')).toEqual(mockFarm);
    });
  });

  describe('update', () => {
    it('it should update a farm and return one affected row object', async () => {
      const spy = jest.spyOn(controller, 'update')
      expect(await controller.update('1', mockFarm)).toEqual(mockAffected);
      expect(spy).toBeCalledWith('1',mockFarm); 
    });
  });

  describe('remove', () => {
    it('it should remove a farm and return one affected row object', async () => {
      const spy = jest.spyOn(controller, 'remove')
      expect(await controller.remove('1')).toEqual(mockAffected);
      expect(spy).toBeCalledWith('1'); 
    });
  });

});