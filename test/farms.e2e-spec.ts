import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { DataSource } from 'typeorm';
import { CreateFarmDto } from '../src/farms/dto/create-farm.dto';
import { setupDataSource } from '../src/ormconfig';

describe('FarmController (e2e)', () => {
    let app: INestApplication;

    const mockFarm: CreateFarmDto  = { 
   
         "name": "Fazenda SP",
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

  
    beforeAll(async () => {
        const dataSource = await setupDataSource();     
        const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
        })       
        .overrideProvider(DataSource)
        .useValue(dataSource)
        .compile();

        app = moduleFixture.createNestApplication();
        await app.init();

        await request(app.getHttpServer())
            .post("/areas")
            .set("Accept", "application/json")
            .send({
                    name: "soja"
            });

    });

    describe("/farms (POST)", () => {
        it("it should register a farm and return the new farm object", () => {

        return request(app.getHttpServer())
            .post("/farms")
            .set("Accept", "application/json")
            .send(mockFarm)
            .expect((response: request.Response) => {
                const {
                    id,
                    name,
                } = response.body;

                expect(typeof id).toBe("number");
                expect(name).toEqual(mockFarm.name);
            })
            .expect(HttpStatus.CREATED);
        });
    })

    describe("/farms (GET)", () => {
        it("it should get a farm by id and return the farm object", () => {
        return request(app.getHttpServer())
            .get("/farms/1")
            .set("Accept", "application/json")
            .expect((response: request.Response) => {
                const {
                    id,
                    name,
                } = response.body;

                expect(typeof id).toBe("number");
                expect(name).toEqual(mockFarm.name);
            })
            .expect(HttpStatus.OK);
        });
    })

    describe("/farms (PATCH)", () => {
        it("it should update a farm and return the one affected object", () => {
        return request(app.getHttpServer())
            .patch("/farms/1")
            .set("Accept", "application/json")
            .send(mockFarm)
            .expect((response: request.Response) => {
                const {
                    affected
                } = response.body;

                expect(affected).toBe(1);
            })
            .expect(HttpStatus.OK);
        });
    })

    describe("/farms (GET)", () => {
        it("it should get a farm by id and return the farm object", () => {
        return request(app.getHttpServer())
            .get("/farms/1")
            .set("Accept", "application/json")
            .expect((response: request.Response) => {
                const {
                    id,
                    name,
                } = response.body;

                expect(typeof id).toBe("number");
                expect(name).toEqual(mockFarm.name);
            })
            .expect(HttpStatus.OK);
        });
    })

    describe("/farms (DELETE)", () => {
        it("it should delete a farm and return the one affected object", () => {
        return request(app.getHttpServer())
            .delete("/farms/1")
            .set("Accept", "application/json")
            .expect((response: request.Response) => {
                const {
                    affected
                } = response.body;

                expect(affected).toBe(1);
            })
            .expect(HttpStatus.OK);
        });
    })

    describe("/farms (GET)", () => {
        it("it should get a farm by id and return the empty object", () => {
        return request(app.getHttpServer())
            .get("/farms/1")
            .set("Accept", "application/json")
            .expect((response: request.Response) => {               
                expect(response.body).toEqual({});
            })
            .expect(HttpStatus.OK);
        });
    })
});