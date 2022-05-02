import {Request, Response, Router} from 'express';
import {Flower} from '../models';

const flower = Router();

flower.get('/', async (req: Request, res: Response) => {
  res.render('flowers');
});

flower.get('/:name', async (req: Request, res: Response) => {
  const name = req.params.name;
  try {
    const flowerPull = await Flower.findOne({name: name});
    if(flowerPull !== null) {
      res.render('details/flower', {scheme: flowerPull});
    } else {
      res.render('404', {title:"Flower not Found", msg: "Flower not Found!"});
    }
  } catch (e) {
    res.render('404', {msg: e});
  }
});

export default flower;