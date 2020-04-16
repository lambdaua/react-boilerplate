import {createStore, compose, applyMiddleware} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import {composeWithDevTools, EnhancerOptions} from 'redux-devtools-extension';

import {reducers} from './reducers';
import {IState, TActions} from './utils';

const composeEnhansers = process.env.NODE_ENV === 'production' ? compose : composeWithDevTools;

export const store = createStore(
  reducers,
  composeEnhansers(
    applyMiddleware(thunk as ThunkMiddleware<IState, TActions>) as EnhancerOptions,
  ),
);
