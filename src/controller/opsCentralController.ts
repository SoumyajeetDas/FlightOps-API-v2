import { Request, Response } from 'express';
import OpsCentralModel from '../models/opsCentralModel';

const getAllOpsCentral = async (_req: Request, res: Response) => {
  try {
    let opsCentralData = await OpsCentralModel.find().sort({ name: 1 });

    res.status(200).send({
      status: '200 OK',
      length: opsCentralData.length,
      data: {
        dbData: opsCentralData,
      },
    });
  } catch (err: any) {
    res.status(500).send({
      status: '500 Internal Server Error',
      message: err.message,
    });
  }
};

export default getAllOpsCentral;
