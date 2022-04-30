import {Request, Response, Router} from 'express';
import { Concentrate } from '../models';

const cct = Router();

cct.get('/', async (req: Request, res: Response) => {
  res.render('concentrate');
});

cct.get('/:name', async (req: Request, res: Response) => {
  const name = req.params.name;
  const cctPull = await Concentrate.findOne({name: name});
  res.render('details/concentrate', {scheme: cctPull});
});

export default cct;