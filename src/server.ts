import express, {Request, Response} from 'express';
import ejs from 'ejs';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.set('view engine','ejs');

app.get('*', (req: Request, res: Response) => {
  res.render('404');
});

app.listen(PORT, ()=>{console.log("Actively Accepting requests...")});