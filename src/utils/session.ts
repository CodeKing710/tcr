import { Request, Response } from 'express';

export const sessionCheck = function(req: Request, res: Response, next: Function) {
  if(req.session.user_id === undefined) {
    req.session.user_id = 'guest';
  }
  next();
};