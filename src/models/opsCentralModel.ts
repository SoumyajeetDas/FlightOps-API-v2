import { getModelForClass, prop } from '@typegoose/typegoose';

class OpsCentrals {
  @prop({ required: [true, 'Please enter the name'], unique: true })
  public name!: string;

  @prop({ required: [true, 'Please enter the path'], trim: true })
  public path!: string;
}

const OpsCentralModel = getModelForClass(OpsCentrals);

export default OpsCentralModel;
