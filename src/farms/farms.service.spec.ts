import { Test, TestingModule } from '@nestjs/testing';
import { FarmsService } from './farms.service';
import { CreateFarmDto  } from './dto/create-farm.dto';
import { Farm } from './entities/farm.entity';

describe('FarmsService', () => {
  let service: FarmsService;

  const mockFarm: CreateFarmDto = {
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
  
  beforeAll(async () => {
    
    const module: TestingModule = await Test.createTestingModule({   
      providers: [
          {
            provide: FarmsService,
            useValue: {
              findAll: jest.fn().mockResolvedValue([]),
              findOne: jest.fn().mockResolvedValue(mockFarm),
              create: jest.fn().mockResolvedValue(mockFarm),
              update: jest.fn().mockResolvedValue(mockAffected),
              remove: jest.fn().mockResolvedValue(mockAffected),
            }
          }
        ],
    }).compile();

    service = module.get<FarmsService>(FarmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('returns empty array', async () => {
      expect(await service.findAll()).toStrictEqual([]);
    });
  });

  describe('create farm', () => {
    it('it should register a farm and return the new farm object', async () => {
      const spy = jest.spyOn(service, 'create')
      expect(await service.create(mockFarm)).toEqual(mockFarm);
      expect(spy).toBeCalledWith(mockFarm);    
    });
  });

  describe('findAll', () => {
    it('it should return founds farms', async () => {
      expect(await service.findAll()).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('it should return found farm by id', async () => {
      expect(await service.findOne(1)).toEqual(mockFarm);
    });
  });

  describe('update', () => {
    it('it should update a farm and return one affected row object', async () => {
      const spy = jest.spyOn(service, 'update')
      expect(await service.update(1, mockFarm)).toEqual(mockAffected);
      expect(spy).toBeCalledWith(1,mockFarm); 
    });
  });

  describe('remove', () => {
    it('it should remove a farm and return one affected row object', async () => {
      const spy = jest.spyOn(service, 'remove')
      expect(await service.remove(1)).toEqual(mockAffected);
      expect(spy).toBeCalledWith(1); 
    });
  });
});