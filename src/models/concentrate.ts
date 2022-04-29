import mongoose, {Schema} from 'mongoose';

interface IConcentrate {
  name: string,
  aroma: string,
  style: string
}

const _Concentrate = new Schema<IConcentrate>({
  name: {type: String, required: true},
  aroma: {type: String, required: true},
  style: {type: String, required: true}
});

export default _Concentrate;