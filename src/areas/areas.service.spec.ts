import { Test, TestingModule } from '@nestjs/testing';
import { AreasService } from './areas.service';
import { CreateAreaDto  } from './dto/create-area.dto';

describe('AreasService', () => {
  let service: AreasService;

  const mockArea: CreateAreaDto = {
    id: 1,
    name: "Soja"
  };
 
  const mockAffected = {
      affected: 1
  }
  
  beforeAll(async () => {
    
    const module: TestingModule = await Test.createTestingModule({   
      providers: [
          {
            provide: AreasService,
            useValue: {
              findAll: jest.fn().mockResolvedValue([]),
              findOne: jest.fn().mockResolvedValue(mockArea),
              create: jest.fn().mockResolvedValue(mockArea),
              update: jest.fn().mockResolvedValue(mockAffected),
              remove: jest.fn().mockResolvedValue(mockAffected),
            }
          }
        ],
    }).compile();

    service = module.get<AreasService>(AreasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('returns empty array', async () => {
      expect(await service.findAll()).toStrictEqual([]);
    });
  });

  describe('create area', () => {
    it('it should register a area and return the new area object', async () => {
      const spy = jest.spyOn(service, 'create')
      expect(await service.create(mockArea)).toEqual(mockArea);
      expect(spy).toBeCalledWith(mockArea);    
    });
  });

  describe('findAll', () => {
    it('it should return founds areas', async () => {
      expect(await service.findAll()).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('it should return found area by id', async () => {
      expect(await service.findOne(1)).toEqual(mockArea);
    });
  });

  describe('update', () => {
    it('it should update a area and return one affected row object', async () => {
      const spy = jest.spyOn(service, 'update')
      expect(await service.update(1, mockArea)).toEqual(mockAffected);
      expect(spy).toBeCalledWith(1,mockArea); 
    });
  });

  describe('remove', () => {
    it('it should remove a area and return one affected row object', async () => {
      const spy = jest.spyOn(service, 'remove')
      expect(await service.remove(1)).toEqual(mockAffected);
      expect(spy).toBeCalledWith(1); 
    });
  });
});