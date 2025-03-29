
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop({
    required: true,
    unique: true
  })
  name: string;

  @Prop({
    required: true,
    min: 2
  })
  age: number;

  @Prop()
  color: string;

  @Prop()
  cute: boolean;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
