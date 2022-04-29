import mongoose, {Schema} from 'mongoose';

interface ISyrup {
  name: string,
  aroma: string,
  style: string
}

const _Syrup = new Schema<ISyrup>({
  name: {type: String, required: true},
  aroma: {type: String, required: true},
  style: {type: String, required: true}
});

export default _Syrup;