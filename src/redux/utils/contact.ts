import {createTypes, IError} from './index';

export interface IContactForm {
  email: string;
}

export interface IContact {
  sendContactForm: {
    fetching: boolean;
    fetched: boolean;
    error: null | IError,
  };
}

export const CONTACT = {
  SEND_CONTACT_FORM: createTypes('SEND_CONTACT_FORM'),
  CLEAR_ERRORS: 'CLEAR_ERRORS',
};
