import mongoose from 'mongoose';

export enum Gender {
  Male = 1,
  Female = 0,
}
export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password: string;
  gender: Gender;
  interestedTags: string[];
}
