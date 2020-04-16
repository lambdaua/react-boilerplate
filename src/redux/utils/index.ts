import {ThunkDispatch, ThunkAction} from 'redux-thunk';
import {IContact} from './contact';

export interface IState {
  auth: IContact;
}

export type TActions =
  IAction<IContact>;

export interface IAction<T> {
  readonly type: string;
  readonly payload: T;
}

export interface ITypes {
  readonly PENDING: string;
  readonly SUCCESS: string;
  readonly FAIL: string;
}

export interface IError {
  status: number;
  data: any;
}

export type TThunkResult<R> = ThunkAction<R, IState, undefined, IAction<any>>;

export type TThunkDispatch = ThunkDispatch<IState, {}, IAction<any>>;

export type TCreateAction = (type: string) => TActionFunction;

export type TActionFunction = <T>(payload: T) => IAction<T>;

export type TCreateActions = (types: ITypes) => {
  pending: TActionFunction;
  success: TActionFunction;
  fail: TActionFunction;
};

export type TCreateTypes = (type: string) => ITypes;

export const createAction: TCreateAction = (type) => (payload) => ({
  type,
  payload,
});

export const createTypes: TCreateTypes = (type: string) => {
  return {
    PENDING: `${type}/PENDING`,
    SUCCESS: `${type}/SUCCESS`,
    FAIL: `${type}/FAIL`,
  };
};

export const createActions: TCreateActions = (types) => {
  return {
    pending: createAction(types.PENDING),
    success: createAction(types.SUCCESS),
    fail: createAction(types.FAIL),
  };
};
