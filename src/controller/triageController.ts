import { Request, Response } from 'express';
import TriageModel from '../models/triageModel';

const getAllTriage = async (_req: Request, res: Response) => {
  const triageData = await TriageModel.find().sort({ name: 1 });

  try {
    res.status(200).send({
      status: '200 OK',
      length: triageData.length,
      data: {
        dbData: triageData,
      },
    });
  } catch (err: any) {
    res.status(500).send({
      status: '500 Internal Server Error',
      message: err.message,
    });
  }
};

export default getAllTriage;
