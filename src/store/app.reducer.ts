import { AppActions } from '@/domain/app-actions.enum';
import { AppReducerFn, AppState, DispatchObject } from '@/domain/app-store';
import { throwUnhandledActionError } from '@/utilities/errors/throw-errors';

export const initialState: AppState = {
  error: null,
};

const handleError: AppReducerFn = ({ state, action }) => {
  return { ...state, error: action.payload };
};

const clearError: AppReducerFn = ({ state }) => {
  return { ...state, error: null };
};

const reducerHandlers: Record<AppActions, AppReducerFn> = {
  [AppActions.SetError]: handleError,
  [AppActions.ClearError]: clearError,
};

export const appReducer = (state: AppState, action: DispatchObject<AppActions>): AppState => {
  const handler = reducerHandlers[action.type] ?? throwUnhandledActionError(action.type);
  return handler({ state, action });
};
