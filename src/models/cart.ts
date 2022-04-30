import mongoose, {Schema} from 'mongoose';

interface Cart {
  owner: string,
  items?: mongoose.Types.ObjectId[]
}

const _Cart = new Schema<Cart>({
  owner: {type: String, required: true},
  items: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
});

export default _Cart;