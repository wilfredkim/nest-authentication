import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car)
        private readonly carRepository: Repository<Car>,
    ) { }

    findAll(): Promise<Car[]> {
        return this.carRepository.find();
    }

    findOne(id: number): Promise<Car | null> {
        return this.carRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.carRepository.delete(id);
    }
    async save(data: Car): Promise<Car> {
        if (!data) {
            throw new Error("Data is required to save a car.");
        }
        Logger.log('Car Details ',data)
        return await this.carRepository.save(data);
    }

}
