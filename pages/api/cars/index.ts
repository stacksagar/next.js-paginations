import allCars from './allCars';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function cars(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json(allCars);
  } catch (error) {
    res.status(400).json({
      message: 'Something has wrong!',
      error,
    });
  }
}
