import {Router, Request, Response} from 'express';
import {Cart, Item} from '../models';
import getCart from '../utils/getCart';
import type { ICart } from '../models/cart';

const cart = Router();

cart.get('/', (req: Request, res: Response) => {
  res.redirect(`/cart/${req.session.user_id}/`);
});

cart.get('/:user', async (req: Request, res: Response) => {
  const user = req.params.user;
  await getCart(user, async (cart: ICart) => {
    res.render('user/cart', {user: user, id: req.session.user_id, cart: cart?.items});
  }, (e: Error) => {
    res.render('404', {id: req.session.user_id, msg: `User not found: ${e}`});
  });
});

//Non-rendering route
cart.post('/:user', async (req: Request, res: Response) => {
  const user = req.params.user;
  const cart = req.body.cart;
  //Sort original array and convert to items
  const parsedCart = cart.sort().map((item: string) => {
    return {
      name: item,
      quantity: 1,
      price: 3
    }
  });
  //Filter parsedCart
  for(let i = 0; i < parsedCart.length; i++) {
    for(let j = i+1; j < parsedCart.length; j++) {
      if(parsedCart[i] === parsedCart[j]) {
        parsedCart[i].quantity+=1;
        parsedCart.splice(j,1);
      }
    }
  }

  await getCart(user, async (cart: ICart) => {
    if(!cart) {
      await Cart.create({
        owner: user,
        items: parsedCart
      });
    } else {
      await Cart.updateOne({owner: user}, {items: parsedCart});
    }
    res.json({success: true});
  },(e: Error)=>{
    res.json({sucess: false, error: e});
  });
});

cart.get('/:user/checkout', async (req: Request, res: Response) => {
  const user = req.params.user;
  await getCart(user, (cart: ICart)=>{
    res.render('user/checkout', {id: req.session.user_id, cart: cart});
  });
});

export default cart;