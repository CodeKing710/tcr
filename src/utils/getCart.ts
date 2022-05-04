import { Cart } from "../models";

export default async function getCart(user: string, callback: Function, fallback?: Function) {
  try {
    const userCart = await Cart.findOne({owner: user});
    (callback)(userCart);
  } catch (e) {
    if(fallback) {
      (fallback)(e);
    }
  }
}