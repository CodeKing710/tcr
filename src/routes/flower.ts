import {Request, Response, Router} from 'express';
import {Flower} from '../models';

const flower = Router();

flower.get('/', async (req: Request, res: Response) => {
  res.render('flower');
});

flower.get('/:name', async (req: Request, res: Response) => {
  const name = req.params.name;
  const flowerPull = await Flower.findOne({name: name});
  res.render('details/flower', {scheme: flowerPull});
});

export default flower;