
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema';
import { CatCreateDto } from './dto/cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(createCatDto: CatCreateDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findByName(name: string): Promise<Cat[]> {
    return this.catModel.find({name: name}).exec();
  }
  async delete(id: string): Promise<void> {
    this.catModel.deleteOne({_id: id}).exec();
  }

  async findByAge(age: number, name: string): Promise<Cat[]>{
    return this.catModel.find({
        age: age,
        name
    }).exec();
  }
}
