import mongoose from 'mongoose';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password: string;
  interestedTags: string[];
}
