import {Request, Response, Router} from 'express';
import bcrypt from 'bcrypt';
import {User} from '../models';

const auth = Router();

auth.get('/signup', (req: Request, res: Response) => {
  res.render('user/signup');
});

auth.get('/login', (req: Request, res: Response) => {
  res.render('user/login');
});

auth.post('/', async (req: Request, res: Response) => {
  if(req.body?.login) {
    try {
      const user = await User.findOne({username: req.body?.username});
      if(await bcrypt.compare(req.body?.password, user?.password ?? "")) {
        req.user_id = user?.username;
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      await User.create(req.body);
    } catch (e) {
      console.log("Failed to create User!");
    }
  }
  res.redirect('/');
});

export default auth;