
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export default {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nest_db',
    entities: ['dist/src/car/entities/car.entity.js'],
    autoLoadEntities: true,
    synchronize: true
} as TypeOrmModuleOptions;
