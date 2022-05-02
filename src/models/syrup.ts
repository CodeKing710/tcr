import mongoose, {Schema} from 'mongoose';

interface ISyrup {
  name: string,
  aroma: string,
  style: string,
  desc?: string,
  img?: string
}

const _Syrup = new Schema<ISyrup>({
  name: {type: String, required: true},
  aroma: {type: String, required: true},
  style: {type: String, required: true},
  desc: {type: String},
  img: {type: String}
});

export default _Syrup;