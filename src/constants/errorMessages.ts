import {
  BadRequestError,
  HttpError,
  InternalServerError,
  UnauthorizedError
} from 'routing-controllers';

export enum ErrorsMessages {
  MISSING_PARAMS = 'Missing params on body',
  INVALID_CREDENTIALS = 'Invalid credentials',
  EMAIL_NOT_SENT = 'Error at sending email',
  REDIS_ERROR = 'Error in redis database',
  REDIS_ERROR_SET_TOKEN = "Error setting user's token in blacklist",
  UNKNOWN = 'Unknown error',
  BODY_ERRORS = "You have errors in your request's body." +
    "Check 'errors' field for more details.",
  PASSWORD_ERROR = 'Property password must be longer than or equal to 6 characters',
  // HTTP STANDARD MESSAGES
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  BAD_REQUEST_ERROR = 'Bad request error',
  USER_ALREADY_EXISTS = 'A user with this email is already registered',
  CREATE_DID_ERROR = 'An internal server error occurred while trying to create a new did',
  GET_DID_CONTROLLER_ERROR = 'Error while trying to get did controller',
  DECODE_DID_CONTROLLER_ERROR = 'Error while decoding did',
  ADD_ATTRIBUTE_ERROR = 'Error while associating attribute to did',
  // eslint-disable-next-line max-len
  CREATE_NEW_ONCHAIN_DELEGATE_ERROR = 'An error occurred while trying to create a new onchain delagate',

  // eslint-disable-next-line max-len
  MANAGER_ALREADY_EXISTIS = 'A manager already exists for the entity Did, please remove it before creating a new one',
  MANAGER_DOES_NOT_EXIST = 'A manager does not exist for the Entity Did passed in'
}

export const Errors = {
  [ErrorsMessages.MISSING_PARAMS]: new BadRequestError(
    ErrorsMessages.MISSING_PARAMS
  ),
  [ErrorsMessages.INVALID_CREDENTIALS]: new UnauthorizedError(
    ErrorsMessages.INVALID_CREDENTIALS
  ),
  // Throw a BadGateway error
  [ErrorsMessages.EMAIL_NOT_SENT]: new HttpError(
    502,
    ErrorsMessages.EMAIL_NOT_SENT
  ),
  [ErrorsMessages.BAD_REQUEST_ERROR]: new InternalServerError(
    ErrorsMessages.BAD_REQUEST_ERROR
  )
};
