import { AppActions } from '@/domain/app-actions.enum';
import { AppDispatch } from '@/domain/app-store';
import { CustomException } from '@/domain/custom-exceptions.enum';
import { CustomError, ErrorState } from '@/domain/error';

interface HandleErrorFnProps {
  dispatchApp: AppDispatch;
  error: CustomError;
}

interface CreateErrorProps {
  error: CustomError;
  handlePrimaryAction: () => void;
}

type HandleErrorFn = (props: HandleErrorFnProps) => void;
type CreateErrorFn = (props: CreateErrorProps) => ErrorState;

const defaultErrorTitle = 'Ocurrió un error';
const defaultPrimaryText = 'Aceptar';
const defaultMessage = 'Ocurrió un error inesperado. Por favor, intenta nuevamente';

const createError: CreateErrorFn = ({ error, handlePrimaryAction }) => {
  const { type } = error;
  const defaultError: ErrorState = {
    type: '',
    title: defaultErrorTitle,
    message: defaultMessage,
    buttonText: defaultPrimaryText,
    handleClickButton: handlePrimaryAction,
  };

  if (type === CustomException.InvalidFormatError) {
    return {
      ...defaultError,
      message: 'Por favor, coloca una estructura válida. Sigue el ejemplo ;)',
    };
  }

  return defaultError;
};

export const handleError: HandleErrorFn = ({ dispatchApp, error }) => {
  const handlePrimaryAction = () => {
    dispatchApp({ type: AppActions.ClearError });
  };

  const createdError = createError({ error, handlePrimaryAction });

  dispatchApp({ type: AppActions.SetError, payload: createdError });
};
