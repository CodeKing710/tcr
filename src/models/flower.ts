import mongoose, {Schema} from 'mongoose';

interface IFlower {
  name: string,
  aroma: string,
  style: string
}

const _Flower = new Schema<IFlower>({
  name: {type: String, required: true},
  aroma: {type: String, required: true},
  style: {type: String, required: true}
});

export default _Flower;