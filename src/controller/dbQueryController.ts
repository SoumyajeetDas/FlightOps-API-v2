import { Request, Response } from 'express';
import DBQueryModel from '../models/dbQueryModel';

const getAllDBQuery = async (_req: Request, res: Response) => {
  try {
    const dbQueryData = await DBQueryModel.find().sort({ name: 1 });

    res.status(200).send({
      status: '200 OK',
      length: dbQueryData.length,
      data: {
        dbData: dbQueryData,
      },
    });
  } catch (err: any) {
    res.status(500).send({
      status: '500 Internal Server Error',
      message: err.message,
    });
  }
};

export default getAllDBQuery;
