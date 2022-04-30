import {Request, Response, Router} from 'express';
import {Syrup} from '../models';

const syrup = Router();

syrup.get('/', async (req: Request, res: Response) => {
  res.render('syrup');
});

syrup.get('/:name', async (req: Request, res: Response) => {
  const name = req.params.name;
  const syrupPull = await Syrup.findOne({name: name});
  res.render('details/syrup', {scheme: syrupPull});
});

export default syrup;