import { FC } from 'react';

export interface MatrixItemProps {
  value: number;
}

const MatrixItem: FC<MatrixItemProps> = ({ value }) => {
  return (
    <div className='flex justify-center items-center rounded-md border-2 border-green-dark-2 text-2xl'>{value}</div>
  );
};

export default MatrixItem;
