import { Request, Response } from 'express';
import CriticalSystemModel from '../models/criticalSystemModel';

const getAllCriticalSystem = async (_req: Request, res: Response) => {
  try {
    const criticalSystemData = await CriticalSystemModel.find().sort({
      name: 1,
    });

    res.status(200).send({
      status: '200 OK',
      length: criticalSystemData.length,
      data: {
        dbData: criticalSystemData,
      },
    });
  } catch (err: any) {
    res.status(500).send({
      status: '500 Internal Server Error',
      message: err.message,
    });
  }
};

export default getAllCriticalSystem;
