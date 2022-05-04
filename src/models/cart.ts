import mongoose, {Schema} from 'mongoose';

export interface ICart {
  owner: string,
  items?: mongoose.Types.Map<Schema>[]
}

const _Cart = new Schema<ICart>({
  owner: {type: String, required: true},
  items: [{type: Map, of: new Schema({name:String,quantity:Number,price:Number})}]
});

export default _Cart;