import { Severity, getModelForClass, prop } from '@typegoose/typegoose';

class Mysumoqueries {
  @prop({ default: 'SavedSearchWithScheduleSyncDefinition' })
  public type!: string;

  @prop({ required: [true, 'Please enter the name'], unique: true })
  public name!: string;

  @prop({
    queryText: { required: [true, 'Please enter the queryText'] },
    byReceiptTime: { default: false },
    viewName: { default: '' },
    parsingMode: { default: 'AutoParse' },
    allowMixed: Severity.ALLOW,
  })
  public search!: {
    queryText: string;
    defaultTimeRange: string;
    byReceiptTime: boolean;
    viewName: string;
    viewStartTime?: Date;
    queryParameters?: string[];
    parsingMode: string;
  };

  @prop({ default: null })
  public searchSchedule?: Date;

  @prop({ default: null })
  public description?: string;
}

const MySumoModel = getModelForClass(Mysumoqueries);

export default MySumoModel;
