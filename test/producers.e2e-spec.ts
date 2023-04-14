import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { DataSource } from 'typeorm';
import { CreateProducerDto } from '../src/producers/dto/create-producer.dto';
import { setupDataSource } from '../src/ormconfig';

describe('ProducerController (e2e)', () => {
    let app: INestApplication;

    const mockProducer: CreateProducerDto  = {
        "id": 1,
        "name": "Daniel Corbe",
        "document": "29274734808",
        "farms": [
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

    describe("/producers (POST)", () => {
        it("it should register a producer and return the new producer object", () => {
        return request(app.getHttpServer())
            .post("/producers")
            .set("Accept", "application/json")
            .send(mockProducer)
            .expect((response: request.Response) => {
                const {
                    id,
                    name,
                } = response.body;

                expect(typeof id).toBe("number");
                expect(name).toEqual(mockProducer.name);
            })
            .expect(HttpStatus.CREATED);
        });
    })

    describe("/producers (GET)", () => {
        it("it should get a producer by id and return the producer object", () => {
        return request(app.getHttpServer())
            .get("/producers/1")
            .set("Accept", "application/json")
            .expect((response: request.Response) => {
                const {
                    id,
                    name,
                } = response.body;

                expect(typeof id).toBe("number");
                expect(name).toEqual(mockProducer.name);
            })
            .expect(HttpStatus.OK);
        });
    })

    describe("/producers (PATCH)", () => {
        it("it should update a producer and return the one affected object", () => {
        return request(app.getHttpServer())
            .patch("/producers/1")
            .set("Accept", "application/json")
            .send(mockProducer)
            .expect((response: request.Response) => {
                const {
                    affected
                } = response.body;

                expect(affected).toBe(1);
            })
            .expect(HttpStatus.OK);
        });
    })

    describe("/producers (GET)", () => {
        it("it should get a producer by id and return the producer object", () => {
        return request(app.getHttpServer())
            .get("/producers/1")
            .set("Accept", "application/json")
            .expect((response: request.Response) => {
                const {
                    id,
                    name,
                } = response.body;

                expect(typeof id).toBe("number");
                expect(name).toEqual(mockProducer.name);
            })
            .expect(HttpStatus.OK);
        });
    })

    describe("/producers (DELETE)", () => {
        it("it should delete a producer and return the one affected object", () => {
        return request(app.getHttpServer())
            .delete("/producers/1")
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

    describe("/producers (GET)", () => {
        it("it should get a producer by id and return the empty object", () => {
        return request(app.getHttpServer())
            .get("/producers/1")
            .set("Accept", "application/json")
            .expect((response: request.Response) => {               
                expect(response.body).toEqual({});
            })
            .expect(HttpStatus.OK);
        });
    })
});