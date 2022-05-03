import {Request, Response, Router} from 'express';
import bcrypt from 'bcrypt';
import {User} from '../models';

const auth = Router();

auth.get('/signup', (req: Request, res: Response) => {
  res.render('user/signup', {id: req.session.user_id});
});

auth.get('/login', (req: Request, res: Response) => {
  res.render('user/login', {id: req.session.user_id});
});

auth.get('/logout', (req: Request, res: Response) => {
  req.session.user_id = 'guest';
  res.redirect('/');
});

auth.post('/', async (req: Request, res: Response) => {
  if(req.body?.login) {
    try {
      const user = await User.findOne({username: req.body?.username});
      console.log(user);
      if(await bcrypt.compare(req.body?.password, user?.password ?? "")) {
        console.log("Correct Password");
        req.session.user_id = user?.username;
      } else {
        console.log("Incorrect password");
        req.session.user_id = 'guest';
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    //Create then login
    try {
      await User.create(req.body);
    } catch (e) {
      console.log("Failed to create User!");
    }

    req.session.user_id = req.body?.username;
  }
  res.redirect('/');
});

export default auth;