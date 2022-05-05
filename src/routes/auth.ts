import {Request, Response, Router} from 'express';
import bcrypt from 'bcrypt';
import {User} from '../models';
import { rmSync } from 'fs';

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
        res.redirect('/');
      } else {
        console.log("Incorrect password");
        req.session.user_id = 'guest';
        res.render('404', {id: req.session.user_id, msg: "Username or Password Incorrect!"})
      }
    } catch (e) {
      console.log(e);
      res.render('404', {id: req.session.user_id, msg: "User not Found!"});
    }
  } else {
    //Create then login
    try {
      await User.create(req.body);
      req.session.user_id = req.body?.username;
      res.redirect('/');
    } catch (e) {
      console.log("Failed to create User!");
      res.render('404', {id:req.session.user_id, msg: "Failed to create user!"});
    }
  }
});

export default auth;