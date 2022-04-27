import express, {Request, Response} from 'express';
import ejs from 'ejs';
import dotenv from 'dotenv';
import path from 'path';
import sessions from 'express-session';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public'), {}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(sessions({
  secret: process.env.SECRET || "notasecret123",
  saveUninitialized: true,
  cookie: {maxAge: Infinity},
  resave: false
}));
app.use(cookieParser());

app.get('*', (req: Request, res: Response) => {
  res.render('404', {msg: "Page not found"});
});

app.listen(PORT, ()=>{console.log("Actively Accepting requests...")});