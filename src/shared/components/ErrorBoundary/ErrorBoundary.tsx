'use client';

import { FC, PropsWithChildren } from 'react';
import { useAppState } from '@/store/app.context';
import { ErrorModal } from '../ErrorModal';

const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  const { error } = useAppState();

  if (error) {
    return (
      <>
        {children}
        <ErrorModal error={error} />
      </>
    );
  }

  return children;
};

export default ErrorBoundary;
