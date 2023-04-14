import { Test, TestingModule } from '@nestjs/testing';
import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;

  let mockDashboard = {
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
      providers: [
        {
          provide: DashboardService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(mockDashboard),
          }
        }
      ],
    }).compile();

    service = module.get<DashboardService>(DashboardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('it should returns dashboard data', async () => {
      expect(await service.findAll()).toStrictEqual(mockDashboard);
    });
  });
  
});
