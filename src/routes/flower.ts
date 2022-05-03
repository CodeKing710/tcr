import {Request, Response, Router} from 'express';
import {Flower} from '../models';

const flower = Router();

flower.get('/', async (req: Request, res: Response) => {
  try {
    const first50 = await Flower.find().limit(50);
    res.render('flowers', {id: req.session.user_id, flowers: first50});
  } catch (e) {
    res.render('404', {msg: "Database Error: Unable to connect", id: req.session.user_id});
  }
});

flower.get('/:name', async (req: Request, res: Response) => {
  const name = req.params.name;
  try {
    const flowerPull = await Flower.findOne({name: name});
    if(flowerPull !== null) {
      res.render('details/flower', {id: req.session.user_id, scheme: flowerPull});
    } else {
      res.render('404', {title:"Flower not Found", msg: "Flower not Found!", id: req.session.user_id});
    }
  } catch (e) {
    res.render('404', {msg: e, id: req.session.user_id});
  }
});

flower.get('/:name/edit', async (req: Request, res: Response) => {
  const name = req.params.name;
  const query = req.query;
});

export default flower;