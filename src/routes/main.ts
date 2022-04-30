import {Request, Response, Router} from 'express';

const main = Router();

main.get('/', (req: Request, res: Response) => {
  if(!req.session.user_id) {
    req.session.user_id = 'guest';
  }
  res.render('index', {id: req.session.user_id});
});

export default main;