import { Test, TestingModule } from '@nestjs/testing';
import { AreasController } from './areas.controller';
import { AreasService } from './areas.service';
import { CreateAreaDto } from './dto/create-area.dto';

const mockArea: CreateAreaDto = {
  id: 1,
  name: "Soja"
};

const mockAffected = {
    affected: 1
}


describe('AreasController', () => {
  let controller: AreasController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AreasController],
      providers: [
        {
          provide: AreasService,
          useValue: {
            findAll: jest.fn().mockResolvedValue({}),
            findOne: jest.fn().mockResolvedValue(mockArea),
            create: jest.fn().mockResolvedValue(mockArea),
            update: jest.fn().mockResolvedValue(mockAffected),
            remove: jest.fn().mockResolvedValue(mockAffected),
          }
        }
      ],
      
    }).compile();

    controller = module.get<AreasController>(AreasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create area', () => {
    it('it should register a area and return the new area object', async () => {
      const spy = jest.spyOn(controller, 'create')
      expect(await controller.create(mockArea)).toEqual(mockArea);
      expect(spy).toBeCalledWith(mockArea);    
    });
  });

  describe('findAll', () => {
    it('it should return founds areas', async () => {
      expect(await controller.findAll()).toEqual({});
    });
  });

  describe('findOne', () => {
    it('it should return found area by id', async () => {
      expect(await controller.findOne('1')).toEqual(mockArea);
    });
  });

  describe('update', () => {
    it('it should update a area and return one affected row object', async () => {
      const spy = jest.spyOn(controller, 'update')
      expect(await controller.update('1', mockArea)).toEqual(mockAffected);
      expect(spy).toBeCalledWith('1',mockArea); 
    });
  });

  describe('remove', () => {
    it('it should remove a area and return one affected row object', async () => {
      const spy = jest.spyOn(controller, 'remove')
      expect(await controller.remove('1')).toEqual(mockAffected);
      expect(spy).toBeCalledWith('1'); 
    });
  });

});