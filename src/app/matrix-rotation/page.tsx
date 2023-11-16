'use client';
import { ChangeEvent, useState } from 'react';
import { MatrixGroup } from '@/app/matrix-rotation/components/MatrixGroup';
import { MatrixItem } from '@/app/matrix-rotation/components/MatrixItem';
import { Matrix } from '@/app/matrix-rotation/domain/matrix.interface';
import { transformToArray } from '@/utilities/transform-to-array';
import { defaultFlattenedMatrix, defaultGeneratedMatrix } from './domain/config';
import { MatrixResult } from './components/MatrixResult';
import { handleError } from '@/utilities/handle-error/handle-error';
import { useAppDispatch } from '@/store/app.context';

interface MatrixResult {
  isGenerated: boolean;
  flattened: number[];
  output: Matrix;
}

const defaultMatrixResult: MatrixResult = {
  isGenerated: false,
  output: defaultGeneratedMatrix,
  flattened: defaultFlattenedMatrix,
};

const MatrixRotationPage = () => {
  const [matrixInput, setMatrixInput] = useState('');
  const [matrixResult, setMatrixResult] = useState<MatrixResult>(defaultMatrixResult);
  const dispatchApp = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setMatrixInput(value);
  };

  const generateMatrix = () => {
    try {
      if (!matrixInput) return;

      const newMatrix = transformToArray(matrixInput) as Matrix;

      setMatrixResult({
        isGenerated: true,
        output: newMatrix,
        flattened: newMatrix.flat(),
      });
    } catch (error: any) {
      handleError({ dispatchApp, error });
    }
  };

  const rotateClockWise = (matrix: Matrix, orderedMatrix: Matrix) => {
    matrix.reverse();

    matrix.forEach((row, rowIndex) => {
      row.forEach((item, itemIndex) => {
        orderedMatrix[itemIndex][rowIndex] = item;
      });
    });
  };

  const rotateCounterClockWise = (matrix: Matrix, orderedMatrix: Matrix) => {
    matrix.forEach((row, rowIndex) => {
      row.reverse().forEach((item, itemIndex) => {
        orderedMatrix[itemIndex][rowIndex] = item;
      });
    });
  };

  const rotateMatrix = (clockWise: boolean) => {
    if (!matrixInput) return;

    const matrixSideSize = matrixResult.output.length;
    const orderedMatrix: Matrix = Array.from({ length: matrixSideSize }, () => []);

    if (clockWise) {
      rotateClockWise(matrixResult.output, orderedMatrix);
    } else {
      rotateCounterClockWise(matrixResult.output, orderedMatrix);
    }

    setMatrixResult((prev) => ({
      ...prev,
      output: orderedMatrix,
      flattened: orderedMatrix.flat(),
    }));
  };

  return (
    <main className='flex justify-center'>
      <div className='flex flex-col items-center w-full max-w-[31.25rem]'>
        <h1 className='text-4xl font-bold'>MATRIX ROTATION</h1>
        <p className='mt-2 text-green-dark-1 text-center'>
          Completa el campo con una matriz válida y hazla girar de forma antihoraria!
        </p>

        <div className='flex mt-6 w-full gap-2'>
          <input
            type='text'
            className='px-4 w-full py-3 border-stone-400 border-2 rounded-md bg-transparent placeholder-stone-400 text-lg'
            placeholder='Ingresa la matriz'
            value={matrixInput}
            onChange={handleInputChange}
          />
          <button
            className='bg-green-light-2 font-semibold text-background py-3 px-7 border border-green-dark-1 hover:border-transparent rounded-md'
            onClick={generateMatrix}
          >
            GENERAR
          </button>
        </div>

        <span className='block text-gray-500 text-md mt-4'>Ejemplo: [[1,2,3],[4,5,6],[7,8,9]]</span>

        <MatrixGroup className='mt-6 mb-8 w-full max-w-[25rem] h-[25rem]' sideSize={matrixResult.output.length}>
          {matrixResult.flattened.map((item, index) => (
            <MatrixItem key={index} value={item} />
          ))}
        </MatrixGroup>

        <div className='flex w-full gap-4'>
          <button
            className='w-full text-sm bg-green-light-2 font-semibold text-background py-6 px-10 border border-green-dark-1 hover:border-transparent rounded-md disabled:opacity-40 disabled:cursor-not-allowed'
            onClick={() => rotateMatrix(false)}
            disabled={!matrixResult.isGenerated}
          >
            ROTAR ANTIHORARIO
          </button>

          <button
            className='w-full text-sm bg-green-light-2 font-semibold text-background py-6 px-10 border border-green-dark-1 hover:border-transparent rounded-md disabled:opacity-40 disabled:cursor-not-allowed'
            onClick={() => rotateMatrix(true)}
            disabled={!matrixResult.isGenerated}
          >
            ROTAR HORARIO
          </button>
        </div>

        {matrixResult.isGenerated && <MatrixResult result={matrixResult.output} />}
      </div>
    </main>
  );
};

export default MatrixRotationPage;
