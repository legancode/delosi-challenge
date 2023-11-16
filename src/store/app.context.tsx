'use client';

import { AppDispatch, AppState } from '@/domain/app-store';
import { FC, PropsWithChildren, createContext, useContext, useReducer } from 'react';
import { appReducer, initialState } from './app.reducer';

const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<AppDispatch | undefined>(undefined);

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = (): AppState => {
  const context = useContext(AppStateContext) as AppState;

  if (!context) throw new Error('useAppState must be used within a AppStateContext');

  return context;
};

const useAppDispatch = (): AppDispatch => {
  const context = useContext(AppDispatchContext) as AppDispatch;

  if (!context) throw new Error('useAppDispatch must be used within a AppDispatchContext');

  return context;
};

export { AppProvider, useAppState, useAppDispatch };
