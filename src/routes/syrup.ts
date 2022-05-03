import {Request, Response, Router} from 'express';
import {Syrup} from '../models';

const syrup = Router();

syrup.get('/', async (req: Request, res: Response) => {
  try {
    const first50 = await Syrup.find().limit(50);
    res.render('syrups', {id: req.session.user_id, syrups: first50});
  } catch (e) {
    res.render('404', {msg: "Database Error: Unable to connect", id: req.session.user_id});
  }
});

syrup.get('/:name', async (req: Request, res: Response) => {
  const name = req.params.name;
  try {
    const syrupPull = await Syrup.findOne({name: name});
    if(syrupPull !== null) {
      res.render('details/syrup', {id: req.session.user_id, scheme: syrupPull});
    } else {
      res.render('404', {title:"Flower not Found", msg: "Flower not Found!", id: req.session.user_id});
    }
  } catch (e) {
    res.render('404', {msg: e, id: req.session.user_id});
  }
});

syrup.get('/:name/edit', async (req: Request, res: Response) => {
  const name = req.params.name;
  const query = req.query;
});

export default syrup;