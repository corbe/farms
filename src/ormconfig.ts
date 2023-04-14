// Config that is common to more than one part of the app.
import { DataSource  } from 'typeorm';
import { newDb } from 'pg-mem';


const setupDataSource = async () => {
    const db = newDb({
        autoCreateForeignKeyIndices: true,
    });

    db.public.registerFunction({
        implementation: () => 'test',
        name: 'current_database',
    });

    db.public.registerFunction({
        implementation: () => 'test',
        name: 'version',
    });

    // !! Add postgresl uuid-ossp extension, to use primary keys as uuid
    // db.registerExtension('uuid-ossp', (schema) => {
    //     schema.registerFunction({
    //       name: 'uuid_generate_v4',
    //       returns: DataType.uuid,
    //       implementation: v4,
    //       impure: true,
    //     });
    //   });

    const ds: DataSource = await db.adapters.createTypeormDataSource({
        type: 'postgres',
        entities: ['../**/*.entity{.ts,.js}']
    });
    await ds.initialize();
    await ds.synchronize();

    return ds;
};

export { setupDataSource };