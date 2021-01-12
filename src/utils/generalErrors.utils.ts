import { IError } from '../types/generalErrors.types';
export class GeneralError extends Error {
  error: IError;
  constructor({ error }: IError) {
    super();
    this.error = error;
  }
  get getCode() {
    if (this instanceof BadRequest) {
      return 400;
    }
    if (this instanceof Unauthorized) {
      return 401;
    }
    if (this instanceof NotFound) {
      return 404;
    }
    if (this instanceof NotAllowed) {
      return 405;
    }

    return 500;
  }
}

export class BadRequest extends GeneralError {}
export class NotFound extends GeneralError {}
export class Unauthorized extends GeneralError {}
export class NotAllowed extends GeneralError {}
