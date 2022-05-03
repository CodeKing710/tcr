import {Request, Response, Router} from 'express';

const about = Router();

about.get('/', (req: Request, res: Response) => {
  res.render('about', {id: req.session.user_id});
});
about.get('/contact', (req: Request, res: Response) => {
  res.render('contact', {id: req.session.user_id});
});

export default about;