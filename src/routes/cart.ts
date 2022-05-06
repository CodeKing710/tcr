import {Router, Request, Response} from 'express';
import {Cart} from '../models';
import getCart from '../utils/getCart';
import type { ICart } from '../models/cart';
import type { Item } from '../models/item';

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
  if(parsedCart.length > 0) {
    for(let i = 0; i <= parsedCart.length; i++) {
      if(parsedCart[i+1] === undefined) {
        if(parsedCart[i] !== undefined && parsedCart[i-1] !== undefined) {
          if(parsedCart[i-1].name === parsedCart[i].name) {
            parsedCart[i-1].quantity += parsedCart[i].quantity;
            parsedCart[i-1].price = parsedCart[i].quantity * 3;
            parsedCart.splice(i, 1);
          }
        }
      } else {
        if(parsedCart[i] !== undefined) {
          if(parsedCart[i].name === parsedCart[i+1].name) {
            parsedCart[i].quantity += parsedCart[i+1].quantity;
            parsedCart[i].price = parsedCart[i].quantity * 3;
            parsedCart.splice(i+1, 1);
            --i;
          }
        }
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

//Non-rendering route
cart.get('/:user/items', async (req: Request, res: Response) => {
  const user = req.params.user;
  await getCart(user, (cart: ICart) => {
    res.json({item: cart.items});
  });
});

export default cart;