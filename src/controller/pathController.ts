import { Request, Response } from 'express';
import PathModel from '../models/pathModel';

const getAllPaths = async (_req: Request, res: Response) => {
  try {
    const pathData = await PathModel.find().sort({ name: 1 });

    res.status(200).send({
      status: '200 OK',
      length: pathData.length,
      data: {
        dbData: pathData,
      },
    });
  } catch (err: any) {
    res.status(500).send({
      status: '500 Internal Server Error',
      message: err.message,
    });
  }
};

export default getAllPaths;
