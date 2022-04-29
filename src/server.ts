//Imports
import express, {Request, Response} from 'express';
import ejs from 'ejs';
import dotenv from 'dotenv';
import path from 'path';
import sessions from 'express-session';
import cookieParser from 'cookie-parser';
//Configure environment variables
dotenv.config();

//App and app constants (some shared)
const app = express();
const PORT = process.env.PORT ?? 3000;

//Express Middleware
app.set('views', './views');
app.set('view engine','ejs');
app.use(express.static('./public', {}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(sessions({
  secret: process.env.SECRET ?? "notasecret123",
  saveUninitialized: true,
  cookie: {maxAge: Infinity},
  resave: false
}));
app.use(cookieParser());

//Adjust Express Request and Response interfaces to include sessions and render
declare module "express-serve-static-core" {
  interface Request {
    user_id?: string;
  }
}

//Routes
import {auth} from './routes/auth';
app.use(auth);

//Catch any unresolved 404 errors
app.get('*', (req: Request, res: Response) => {
  res.render('404');
});

app.listen(PORT, ()=>{console.log("Actively Accepting requests...")});