import produce from 'immer';

import {IContact, CONTACT} from '../utils/contact';

const initialState: IContact = {
  sendContactForm: {
    fetching: false,
    fetched: false,
    error: null,
  },
};

export const contact = (state = initialState, action): IContact => produce(state, ((draft) => {
  switch (action.type) {
    case CONTACT.SEND_CONTACT_FORM.PENDING:
      draft.sendContactForm.fetching = true;
      break;
    case CONTACT.SEND_CONTACT_FORM.SUCCESS:
      draft.sendContactForm.fetching = false;
      draft.sendContactForm.fetched = true;
      break;
    case CONTACT.SEND_CONTACT_FORM.FAIL:
      draft.sendContactForm.fetching = false;
      draft.sendContactForm.error = action.payload;
      break;
    case CONTACT.CLEAR_ERRORS:
      draft.sendContactForm.error = null;
      break;
    default:
      break;
  }
}));
