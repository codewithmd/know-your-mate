import mongoose from 'mongoose';
import { IUser } from '../types/user.types';

export interface UserDoc extends mongoose.Document {
  firstName: IUser['firstName'];
  lastName: IUser['lastName'];
  email: IUser['email'];
  mobileNumber: IUser['mobileNumber'];
  password: IUser['password'];
  interestedTags: IUser['interestedTags'];
}

const userSchema: mongoose.Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  interestedTags: [{ type: String }],
});

const UserModel = mongoose.model<UserDoc>('User', userSchema);

export default UserModel;
