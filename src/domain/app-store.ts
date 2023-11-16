import { Dispatch } from 'react';
import { AppActions } from './app-actions.enum';
import { ErrorState } from './error';

export interface DispatchObject<T, P = any> {
  type: T;
  payload?: P;
}

export type AppDispatch = Dispatch<DispatchObject<AppActions>>;

export interface AppState {
  error: ErrorState | null;
}

export interface AppReducerFnProps<T> {
  state: AppState;
  action: DispatchObject<AppActions, T>;
}

export interface AppReducerFn<P = any> {
  (props: AppReducerFnProps<P>): AppState;
}
