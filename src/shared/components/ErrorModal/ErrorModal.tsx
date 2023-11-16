'use client';

import { FC, useState } from 'react';
import Modal from '../Modal/Modal';
import { ErrorState } from '@/domain/error';
import { useAppDispatch } from '@/store/app.context';
import { AppActions } from '@/domain/app-actions.enum';

export interface ErroModalProps {
  error: ErrorState;
}

const ErrorModal: FC<ErroModalProps> = ({ error }) => {
  const [openModal, setOpenModal] = useState(true);
  const dispatchApp = useAppDispatch();

  const { title, message, buttonText, handleClickButton } = error;

  const handleClick = (): void => {
    handleClickButton?.();
    setOpenModal(false);
  };

  const handleClose = (open: boolean) => {
    setOpenModal(open);
    dispatchApp({ type: AppActions.ClearError });
  };

  return (
    <Modal title={title} openModal={openModal} handleClose={handleClose}>
      <div className='flex flex-col'>
        <div className='text-center mt-1 mb-5 text-base text-gray-700'>{message}</div>
        <button
          className='w-full text-sm bg-red-600 font-semibold text-white py-3 border rounded-md'
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
    </Modal>
  );
};

export default ErrorModal;
