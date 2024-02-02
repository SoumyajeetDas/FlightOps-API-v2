import { getModelForClass, prop } from '@typegoose/typegoose';

class Path {
  @prop({ required: [true, 'Please provide the name'], unique: true })
  public name!: string;

  @prop({ type: () => [String], validate: (val: string[]) => val.length > 0 })
  path!: string[];
}

const PathModel = getModelForClass(Path);

export default PathModel;
