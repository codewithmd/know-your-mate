import { Router, Request, Response } from 'express';
// import { IUser } from '../types/user.types';
// import UserModel, { UserDocument } from '../models/user.model';

const usersRouter = Router();

usersRouter.get('/test', (req: Request, res: Response) => {
  return res.send('Hello from /users/test');
});

export default usersRouter;
