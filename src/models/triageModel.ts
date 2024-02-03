import { getModelForClass, prop } from '@typegoose/typegoose';

class Triages {
  @prop({ required: [true, 'Please provide the name'], unique: true })
  public name!: string;

  @prop({ required: [true, 'Please provide the path'], unique: true })
  public path!: string;
}

const TriageModel = getModelForClass(Triages);

export default TriageModel;
