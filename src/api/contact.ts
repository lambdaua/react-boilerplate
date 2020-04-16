import axios, {AxiosPromise} from 'axios';

import {IContactForm} from '../redux/utils/contact';

export function sendContactForm({email}: IContactForm): AxiosPromise {
  return axios.post('/api/send', {email});
}
