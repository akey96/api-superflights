import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IPassenger } from 'src/commons/interfaces/passenger.interface';
import { PassengerDTO } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';

@Controller('api/v1/passenger')
export class PassengerController {

    constructor(private readonly passengerService: PassengerService){}

    @Post()
    create(@Body() passengerDTO: PassengerDTO): Promise<IPassenger>{
        return this.passengerService.create(passengerDTO);
    }

    @Get()
    findAll(): Promise<IPassenger[]>{
        return this.passengerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<IPassenger>{
        return this.passengerService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() passegerDTO: PassengerDTO): Promise<IPassenger>{
        return this.passengerService.update(id, passegerDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.passengerService.delete(id);
    }

}
