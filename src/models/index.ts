import mongoose, {connect} from 'mongoose';
import _User from './user';
import _Flower from './flower';
import _Concentrate from './concentrate';
import _Syrup from './syrup';
import _Cart from './cart';
import dotenv from 'dotenv';
dotenv.config();

const MDB = process.env.MDB || "mongodb://";

connect(MDB);

export const User = mongoose.model('User',_User);
export const Flower = mongoose.model('Flower', _Flower);
export const Concentrate = mongoose.model('Concentrate',_Concentrate);
export const Syrup = mongoose.model('Syrup', _Syrup);
export const Cart = mongoose.model('Cart', _Cart);