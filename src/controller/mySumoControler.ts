import { Request, Response } from 'express';
import MySumoModel from '../models/mySumoModel';

const getAllmySumoQueries = async (_req: Request, res: Response) => {
  try {
    const mySumoQueryData = await MySumoModel.find().sort({ name: 1 });

    res.status(200).send({
      status: '200 OK',
      length: mySumoQueryData.length,
      data: {
        dbData: mySumoQueryData,
      },
    });
  } catch (err: any) {
    res.status(500).send({
      status: '500 Internal Server Error',
      message: err.message,
    });
  }
};

export default getAllmySumoQueries;
