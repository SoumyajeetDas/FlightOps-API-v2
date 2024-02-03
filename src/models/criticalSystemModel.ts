import { getModelForClass, prop } from '@typegoose/typegoose';

class Criticalsystems {
  @prop({ required: [true, 'Please provide the name'], unique: true })
  public name!: string;

  @prop({
    required: [true, 'Please provide the path'],
    trim: true,
    unique: true,
  })
  public path!: string;

  @prop({
    required: [true, 'Please enter the smes and if not there enter N/A'],
  })
  public smes!: string;

  @prop({
    required: [true, 'Please enter the vendors and if not there enter N/A'],
  })
  public vendors!: string;
}

const CriticalSystemModel = getModelForClass(Criticalsystems);

export default CriticalSystemModel;
