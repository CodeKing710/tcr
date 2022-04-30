import mongoose from 'mongoose';
import _User from './user';
import _Flower from './flower';
import _Concentrate from './concentrate';
import _Syrup from './syrup';
import _Cart from './cart';
import _Item from './item';
import 'dotenv/config';

const MDB = process.env.MDB || "mongodb://";

declare module 'mongoose' {
  interface ConnectOptions {
    useNewUrlParser?: boolean
  }
}

mongoose.connect(`${MDB}`, {useNewUrlParser: true});

export const User = mongoose.model('User',_User);
export const Flower = mongoose.model('Flower', _Flower);
export const Concentrate = mongoose.model('Concentrate',_Concentrate);
export const Syrup = mongoose.model('Syrup', _Syrup);
export const Cart = mongoose.model('Cart', _Cart);
export const Item = mongoose.model('Item', _Item);