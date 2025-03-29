import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatCreateDto } from './dto/cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private catService: CatsService){}
    @Post()
    createCat(@Body() createCat: CatCreateDto) {
        return this.catService.create(createCat)
    }

    @Get()
    allCats() {
        return this.catService.findAll();
    }

    @Get('/byname/:name')
    getByName(@Param('name') name: string){
        console.log(name);
        return this.catService.findByName(name);
    }

    @Delete('/:id')
    deleteCatById(@Param('id') id: string){
        return this.catService.delete(id);
    }

    @Get('/search')
    findByAge(@Query('age') age: number, @Query('name') name: string){
        console.log(age)
        return this.catService.findByAge(age, name);
    }
}
