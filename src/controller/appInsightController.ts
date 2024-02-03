import { Request, Response } from 'express';
import AppInsightModel from '../models/appInsightModel';

const getAllAppInsight = async (_req: Request, res: Response) => {
  try {
    const appInsightData = await AppInsightModel.find().sort({ name: 1 });

    res.status(200).send({
      status: '200 OK',
      length: appInsightData.length,
      data: {
        dbData: appInsightData,
      },
    });
  } catch (err: any) {
    res.status(500).send({
      status: '500 Internal Server Error',
      message: err.message,
    });
  }
};

export default getAllAppInsight;
