import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { PassengerService } from 'src/passenger/passenger.service';
import { FlightDTO } from './dto/flight.dto';
import { FlightService } from './flight.service';

@Controller('api/v1/flight')
export class FlightController {

    constructor(
        private readonly flightService: FlightService,
        private readonly passengerService: PassengerService
        ){}

    @Post()
    create(@Body() flightDTO: FlightDTO): Promise<FlightDTO> {
        return this.flightService.create(flightDTO);
    }

    @Get()
    findAll(): Promise<FlightDTO[]> {
        return this.flightService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string ): Promise<FlightDTO> {
        return this.flightService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() flightDTO: FlightDTO ): Promise<FlightDTO> {
        return this.flightService.update(id, flightDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.flightService.delete(id);
    }

    @Post(':flightId/passenger/:passengerId')
    async addPassenger(
        @Param('flightId') flightId: string,
        @Param('passengerId') passengerId: string
        ) {
        
        const passenger = await this.passengerService.findOne(passengerId);
        if(!passenger){
            throw new HttpException(`Passenger Not Found`, HttpStatus.NOT_FOUND);
        }
        return this.flightService.addPassenger(flightId, passengerId);
        
    }


}
