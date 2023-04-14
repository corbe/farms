import { Test, TestingModule } from '@nestjs/testing';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

describe('DashboardController', () => {
  let controller: DashboardController;

  let mockDashboard= {
      "farms": {
          "totalFarms": "2",
          "totalArea": "60"
      },
      "farmsByState": [
          {
              "farms": "2",
              "totalArea": "60",
              "state": "SP"
          }
      ],
      "farmsByPlantingType": [
          {
              "total": "1",
              "totalArea": "11",
              "area": "Café"
          },
          {
              "total": "2",
              "totalArea": "13",
              "area": "Milho"
          }
      ],
      "farmsByAreaType": {
          "totalArableArea": "24",
          "totalVegetationArea": "6"
      }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DashboardController],
      providers: [
        {
          provide: DashboardService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(mockDashboard),
          }
        }
      ],
    }).compile();

    controller = module.get<DashboardController>(DashboardController);
  });

  it('shoud return dashboard data', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('it should returns dashboard data', async () => {
      expect(await controller.findAll()).toStrictEqual(mockDashboard);
    });
  });
});