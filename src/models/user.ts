import mongoose, {Schema} from 'mongoose';

interface IUser {
  username: string,
  password: string,
  email: string
}
const _User = new Schema<IUser>({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true}
});

export default _User;