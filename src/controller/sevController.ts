import { Request, Response } from 'express';
import SevModel from '../models/sevModel';

export const getSev = async (_req: Request, res: Response) => {
  try {
    // Sorting the data in descending order wrt timeOccured and ascending order with title
    const sevData = await SevModel.find().sort({ timeOccured: -1, title: 1 });

    if (sevData.length === 0) {
      return res.status(400).send({
        status: '400 Bad Request',
        message: 'No data to show',
      });
    }
    return res.status(200).send({
      status: '200 OK',
      length: sevData.length,
      data: {
        sevs: sevData,
      },
    });
  } catch (err: any) {
    return res.status(500).send({
      status: '500 Internal Server Error',
      message: err.message,
    });
  }
};

export const addSev = async (req: Request, res: Response) => {
  try {
    if (!req.body) {
      return res.status(400).send({
        status: '400 Bad Request',
        message: 'No data to add',
      });
    }
    const newSev = await SevModel.create(req.body);

    return res.status(201).send({
      status: '201 Created',
      newSev,
    });
  } catch (err: any) {
    return res.status(500).send({
      status: '500 Internal Server Error',
      message: err.message,
    });
  }
};

export const updateSev = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({
        status: '400 Bad Request',
        message: 'No id is present',
      });
    }

    const sevData = await SevModel.findById(req.params.id);

    if (!sevData) {
      return res.status(400).send({
        status: '400 Bad Request',
        message: 'Severity Incident is not present',
      });
    }

    const updatedSev = await SevModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    return res.status(200).send({
      status: 'Data got updated',
      updatedSev,
    });
  } catch (err: any) {
    return res.status(500).send({
      status: '500 Internal Server Error',
      message: err.message,
    });
  }
};

export const deleteSev = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({
        status: '400 Bad Request',
        message: 'No id is present',
      });
    }

    const sevData = await SevModel.findById(req.params.id);

    if (!sevData) {
      return res.status(400).send({
        status: '400 Bad Request',
        message: 'Severity Incident is not present',
      });
    }

    await SevModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      status: '200 Ok',
      message: 'Data got deleted',
    });
  } catch (err: any) {
    return res.status(500).send({
      status: '500 Internal Server Error',
      message: err.message,
    });
  }
};

export const getStats = async (_req: Request, res: Response) => {
  try {
    // First groupby with the application name and then find the total sum and then sort with respect to the application name.
    // _id will have the application name.
    let data = await SevModel.aggregate([
      {
        $group: {
          _id: '$applications',
          sumTotal: { $sum: 1 },
        },
      },
      {
        $sort: { sumTotal: -1 },
      },
    ]);

    if (data.length === 0) {
      return res.status(400).send({
        status: '400 Bad Request',
        message: 'No data to show',
      });
    }

    return res.status(200).send({
      status: '200 OK',
      length: data.length,
      data: {
        dbData: data,
      },
    });
  } catch (err: any) {
    return res.status(500).send({
      status: '500 Internal Server Error',
      message: err.message,
    });
  }
};
