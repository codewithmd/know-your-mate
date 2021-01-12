import mongoose from 'mongoose';
import { IUser, Gender } from '../types/user.types';

export interface UserDocument extends mongoose.Document {
  firstName: IUser['firstName'];
  lastName: IUser['lastName'];
  gender: Gender;
  email: IUser['email'];
  mobileNumber: IUser['mobileNumber'];
  password: IUser['password'];
  interestedTags: IUser['interestedTags'];
  fullName: string;
  getGender(): string;
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
  gender: { type: Number, enum: [0, 1], default: 0, required: true },
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

userSchema.virtual('fullName').get(function (this: UserDocument) {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.methods.getGender = function (this: UserDocument) {
  return this.gender > 0 ? 'Male' : 'Female';
};

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;
