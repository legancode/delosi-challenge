import { FC } from 'react';
import { Matrix } from '@/app/matrix-rotation/domain/matrix.interface';

export interface MatrixResultProps {
  result: Matrix;
}

const MatrixResult: FC<MatrixResultProps> = ({ result }) => {
  return (
    <div className='bg-green-dark-2 text-background w-full max-w-[31.25rem] px-5 py-7 flex flex-col items-center text-lg rounded-md mt-10'>
      <p className='font-bold text-xl'>Resultado:</p>
      <p className='text-2xl mt-2'>{JSON.stringify(result)}</p>
    </div>
  );
};

export default MatrixResult;
