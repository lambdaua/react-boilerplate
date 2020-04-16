import axios, {AxiosPromise} from 'axios';

import {instance} from './instance';
import {IContactForm} from '../redux/utils/contact';

export function sendContactForm({email}: IContactForm): AxiosPromise {
  return instance.post('/api/send', {email});
}
