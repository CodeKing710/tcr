import mongoose, {Schema} from 'mongoose';

interface Item {
  name: string,
  quantity: number,
  price: number
}

const _Item = new Schema<Item>({
  name: {type: String, required: true},
  quantity: {type: Number, required: true},
  price: {type: Number, required: true}
});

export default _Item;