import {Request, Response, Router} from 'express';
import {User} from '../models';

const router = Router();

router.get('/signup', (req: Request, res: Response) => {
  res.render('user/signup');
});

router.get('/login', (req: Request, res: Response) => {
  res.render('user/login');
});

router.post('/', async (req: Request, res: Response) => {
  req.session;
});

export {router as auth};