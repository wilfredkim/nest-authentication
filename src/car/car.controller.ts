import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { Car } from './entities/car.entity';
import { Public } from 'src/auth/decorator/public.decorator';

@Controller('car')
@Public()
export class CarController {
    constructor(private carService: CarService) { }

    @Get()
    async findAll(): Promise<Car[]> {
        return await this.carService.findAll();
    }

    @Post()
    async create(@Body() car: Car): Promise<Car> {
        return await this.carService.save(car);
    }

    @Get(':id')
    async findOne(@Param() params: any):  Promise<Car | null> {
        console.log(params.id);
        return  await this.carService.findOne(params.id);
    }
}
