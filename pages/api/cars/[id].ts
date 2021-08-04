import allCars from './allCars';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function CarApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.query.id) {
      const car = await allCars.find((car) => car.id == req.query?.id);
      return res.status(200).json(car);
    } else {
      return res.status(400).json({ message: "Car couldn't found!" });
    }
  } catch (error) {
    res.status(400).json({
      message: 'Something has wrong!',
      error,
    });
  }
}
