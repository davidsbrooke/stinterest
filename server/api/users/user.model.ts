import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';

export interface IUserModel extends IUser, mongoose.Document {
  createJWT(): string;
  hashPassword(password: string, cb: (err: any, result: any) => any);
  comparePassword(password: string, cb: (err: any, isMatch: boolean) => any);
}
