import {createActions, createAction, TThunkResult, TThunkDispatch} from '../utils';
import {CONTACT} from '../utils/contact';
import {sendContactForm as fetchSendContactForm} from '../../api';

const contactActions = {
  sendContactForm: createActions(CONTACT.SEND_CONTACT_FORM),
  clearErrorsContact: createAction(CONTACT.CLEAR_ERRORS),
};

export const sendContactForm = ({email}): TThunkResult<void> =>
  async (dispatch: TThunkDispatch) => {
    dispatch(contactActions.sendContactForm.pending(undefined));

    try {
      const {data} = await fetchSendContactForm({email});

      dispatch(contactActions.sendContactForm.success(data));
    } catch (error) {
      dispatch(contactActions.sendContactForm.fail(error.response));
    }
  };

export const clearErrorsContact = (): TThunkResult<void> =>
  async (dispatch: TThunkDispatch) => {
    dispatch(contactActions.clearErrorsContact(undefined));
  };
