//Imports
import express, {Request, Response} from 'express';
import ejs from 'ejs';
import path from 'path';
import sessions from 'express-session';
import cookieParser from 'cookie-parser';
import { sessionCheck } from './utils/session';
import * as _routes from './routes';
import methodoverride from 'method-override';
import 'dotenv/config';

//App and app constants (some shared)
const app = express();
const PORT = process.env.PORT ?? 3000;

//Express Middleware
app.set('views', './views');
app.set('view engine','ejs');
app.use('/',express.static('./public', {}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(sessions({
  secret: process.env.SECRET ?? "notasecret123",
  saveUninitialized: true,
  cookie: {maxAge: Infinity},
  resave: false
}));
app.use(cookieParser());
app.use(sessionCheck);
app.use(methodoverride('__m'));

//Adjust Express Request and Response interfaces to include sessions and render
declare module "express-session" {
  interface Session {
    user_id?: string;
  }
}

//Routes
interface routes {
  [index: string | number]: any;
}

const routes: routes = _routes;

for(const route in routes) {
  app.use(routes[route].url, routes[route].scheme);
}

//Catch any unresolved 404 errors
app.get('/*', (req: Request, res: Response) => {
  res.render('404', {id: req.session.user_id});
});

app.listen(PORT, ()=>{console.log("Actively Accepting requests...")});