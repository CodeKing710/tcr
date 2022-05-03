import {Request, Response, Router} from 'express';
import { Concentrate } from '../models';

const cct = Router();

cct.get('/', async (req: Request, res: Response) => {
  try {
    const first50 = await Concentrate.find().limit(50);
    res.render('concentrates', {id: req.session.user_id, ccts: first50});
  } catch (e) {
    res.render('404', {msg: "Database Error: Unable to connect"});
  }
});

cct.get('/:name', async (req: Request, res: Response) => {
  const name = req.params.name;
  try {
    const cctPull = await Concentrate.findOne({name: name});
    if(cctPull !== null) {
      res.render('details/concentrate', {id: req.session.user_id, scheme: cctPull});
    } else {
      res.render('404', {title:"Concentrate not Found", msg: "Concentrate not Found!"});
    }
  } catch (e) {
    res.render('404', {msg: e});
  }
});

cct.get('/:name/edit', async (req: Request, res: Response) => {
  const name = req.params.name;
  const query = req.query;
});

export default cct;