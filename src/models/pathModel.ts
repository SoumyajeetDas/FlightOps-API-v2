import { getModelForClass, prop } from '@typegoose/typegoose';

class Paths {
  @prop({ required: [true, 'Please provide the name'], unique: true })
  public name!: string;

  @prop({
    type: () => [String],
    validate: {
      validator: (val: string[]) => Array.isArray(val) && val.length > 0,
      message: 'Please enter the paths',
    },
  })
  path!: string[];
}

const PathModel = getModelForClass(Paths);

export default PathModel;
