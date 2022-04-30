import {Request, Response, Router} from 'express';

const main = Router();

main.get('/', (req: Request, res: Response) => {
  res.render('index');
});

export default main;