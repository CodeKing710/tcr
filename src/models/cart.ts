import mongoose, {Schema} from 'mongoose';

interface ICart {}

const _Cart = new Schema<ICart>({});

export default _Cart;