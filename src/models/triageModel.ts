import { getModelForClass, prop } from '@typegoose/typegoose';

class Triage {
  @prop({ required: [true, 'Please provide the name'], unique: true })
  public name!: string;

  @prop({ required: [true, 'Please provide the path'], unique: true })
  public path!: string;
}

const TriageModel = getModelForClass(Triage);

export default TriageModel;
