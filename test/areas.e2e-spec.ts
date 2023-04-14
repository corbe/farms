import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { DataSource } from 'typeorm';
import { CreateAreaDto } from './../src/areas/dto/create-area.dto';
import { setupDataSource } from './../src/ormconfig';

describe('AreaController (e2e)', () => {
    let app: INestApplication;

    const mockArea: CreateAreaDto  = {
        name: "soja"
    };

    const mockAreaPatch: CreateAreaDto = {
        name: "trigo"
    };
  
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
    });

    describe("/areas (POST)", () => {
        it("it should register a area and return the new area object", () => {
        return request(app.getHttpServer())
            .post("/areas")
            .set("Accept", "application/json")
            .send(mockArea)
            .expect((response: request.Response) => {
                const {
                    id,
                    name,
                } = response.body;

                expect(typeof id).toBe("number");
                expect(name).toEqual(mockArea.name);
            })
            .expect(HttpStatus.CREATED);
        });
    })

    describe("/areas (GET)", () => {
        it("it should get a area by id and return the area object", () => {
        return request(app.getHttpServer())
            .get("/areas/1")
            .set("Accept", "application/json")
            .expect((response: request.Response) => {
                const {
                    id,
                    name,
                } = response.body;

                expect(typeof id).toBe("number");
                expect(name).toEqual(mockArea.name);
            })
            .expect(HttpStatus.OK);
        });
    })

    describe("/areas (PATCH)", () => {
        it("it should update a area and return the one affected object", () => {
        return request(app.getHttpServer())
            .patch("/areas/1")
            .set("Accept", "application/json")
            .send(mockAreaPatch)
            .expect((response: request.Response) => {
                const {
                    affected
                } = response.body;

                expect(affected).toBe(1);
            })
            .expect(HttpStatus.OK);
        });
    })

    describe("/areas (GET)", () => {
        it("it should get a area by id and return the area object", () => {
        return request(app.getHttpServer())
            .get("/areas/1")
            .set("Accept", "application/json")
            .expect((response: request.Response) => {
                const {
                    id,
                    name,
                } = response.body;

                expect(typeof id).toBe("number");
                expect(name).toEqual(mockAreaPatch.name);
            })
            .expect(HttpStatus.OK);
        });
    })

    describe("/areas (DELETE)", () => {
        it("it should delete a area and return the one affected object", () => {
        return request(app.getHttpServer())
            .delete("/areas/1")
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

    describe("/areas (GET)", () => {
        it("it should get a area by id and return the empty object", () => {
        return request(app.getHttpServer())
            .get("/areas/1")
            .set("Accept", "application/json")
            .expect((response: request.Response) => {               
                expect(response.body).toEqual({});
            })
            .expect(HttpStatus.OK);
        });
    })
});