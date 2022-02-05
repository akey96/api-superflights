import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IUser } from 'src/commons/interfaces/user.interface';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('api/v1/user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post()
    create(@Body() body: UserDTO){
        return this.userService.create(body);
    }

    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<IUser>{
        return this.userService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() userDTO: UserDTO): Promise<IUser>{
        return this.userService.update(id, userDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.userService.delete(id);
    }
}
