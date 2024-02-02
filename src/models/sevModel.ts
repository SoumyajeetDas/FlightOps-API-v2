import { getModelForClass, prop } from '@typegoose/typegoose';

class Sev {
  @prop({
    required: [true, 'Please provide the title of the Ticket'],
    unique: true,
  })
  public title!: string;

  @prop({ required: [true, 'Please enter the Ticket No. or keep as N/A'] })
  public tickNos!: string;

  @prop({ required: [true, 'Please enter the MI No. or keep as N/A'] })
  public miNos!: string;

  @prop({
    required: [true, 'Please enter the application type'],
    enum: [
      'ACARS',
      'Aircraft Performance',
      'FOGS',
      'Jetplan',
      'Pilot Briefing',
      'QXEFB',
      'S4A',
      'VisOps',
      'VisOps DB',
      'WAM',
      'Weather',
      'WebSendTimes',
      'Related to other Team',
      'Multiple System Down',
      'FlightEventsPublisherSvc',
      'ESM/FSM',
    ],
  })
  public applications!: string;

  @prop({
    required: [true, 'Please enter the type of Ticket'],
    enum: ['Sev1', 'Sev2'],
  })
  public ticketType!: string;

  @prop({ required: [true, 'Please enter the date'] })
  public timeOccured!: Date;

  @prop({ required: [true, 'Please enter the description'] })
  public description!: string;

  @prop({ trim: true })
  public link: string | undefined;
}

const SevModel = getModelForClass(Sev);

export default SevModel;
