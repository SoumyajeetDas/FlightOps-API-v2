import { getModelForClass, prop } from '@typegoose/typegoose';

class DBQueries {
  @prop({ required: [true, 'Please enter the name'], unique: true })
  public name!: string;

  @prop({
    type: () => [String],
    validate: {
      validator: (val: string[]) => Array.isArray(val) && val.length > 0,
      message: 'Please enter the paths',
    },
  })
  public path!: string[];
}

const DBQueryModel = getModelForClass(DBQueries);

export default DBQueryModel;
