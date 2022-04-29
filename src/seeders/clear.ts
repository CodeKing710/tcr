import * as _db from '../models';
import {Model} from 'mongoose';

interface db {
  [index: string | number]: Model<any>;
}
const parsedDb: db = _db;

(async (database) => {
  for(const collection in database) {
    try {
      await database[collection].deleteMany();
    } catch (e) {
      console.log("No documents to delete!\n",e);
    }
  }
  
  console.log("Finished");
  process.exit(0);
})(parsedDb);