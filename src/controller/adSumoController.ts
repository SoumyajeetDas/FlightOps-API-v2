import { Request, Response } from 'express';
import AdSumoModel from '../models/adSumoModel';

const getAllAdeleSumo = async (_req: Request, res: Response) => {
  try {
    const adSumoData = await AdSumoModel.find().sort({ name: 1 });
    res.status(200).send({
      status: '200 OK',
      length: adSumoData.length,
      data: {
        dbData: adSumoData,
      },
    });
  } catch (err: any) {
    res.status(500).send({
      status: '500 Internal Server Error',
      message: err.message,
    });
  }
};

export default getAllAdeleSumo;
