'use client';
import { ChangeEvent, useState } from 'react';
import { MatrixGroup } from '@/app/matrix-rotation/components/MatrixGroup';
import { MatrixItem } from '@/app/matrix-rotation/components/MatrixItem';
import { Matrix } from '@/app/matrix-rotation/domain/matrix.interface';
import { transformToArray } from '@/utilities/transform-to-array';
import { defaultFlattenedMatrix, defaultGeneratedMatrix } from './domain/config';
import { MatrixResult } from './components/MatrixResult';

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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setMatrixInput(value);
  };

  // [[1,2,3],[4,5,6],[7,8,9]]
  // [[1,2,3,4],[4,5,6,7],[7,8,9,10],[11,12,13,14]]
  // [[1,2,3,4,5],[4,5,6,7,5],[7,8,9,10,3],[11,12,13,14,3],[1,23,4,5,5]]

  const generateMatrix = () => {
    if (!matrixInput) return;

    // Validar matriz
    const newMatrix = transformToArray(matrixInput) as Matrix;

    setMatrixResult({
      isGenerated: true,
      output: newMatrix,
      flattened: newMatrix.flat(),
    });
  };

  const rotateMatrix = () => {
    if (!matrixInput) return;
    console.log('rotate');
    const matrixSideSize = matrixResult.output.length;
    const orderedMatrix: Matrix = Array.from({ length: matrixSideSize }, () => []);

    matrixResult.output.forEach((row, rowIndex) => {
      // 1. rotar arrays internamente
      row.reverse().forEach((item, itemIndex) => {
        // 2. Obtener los primeros items de cada array y guardarlo en nuevo array
        orderedMatrix[itemIndex][rowIndex] = item;
      });
    });

    // 3. Guardar el nuevo array en matrixOutput
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

        <span className='block text-gray-500 text-md mt-2'>Ejemplo: [[1,2],[3,4]]</span>

        <MatrixGroup className=' my-8 w-full max-w-[25rem] h-[25rem]' sideSize={matrixResult.output.length}>
          {matrixResult.flattened.map((item, index) => (
            <MatrixItem key={index} value={item} />
          ))}
        </MatrixGroup>

        <button
          className='w-full text-2xl bg-green-light-2 font-semibold text-background py-6 px-10 border border-green-dark-1 hover:border-transparent rounded-md disabled:opacity-40 disabled:cursor-not-allowed'
          onClick={rotateMatrix}
          disabled={!matrixResult.isGenerated}
        >
          ROTAR!
        </button>

        {matrixResult.isGenerated && <MatrixResult result={matrixResult.output} />}
      </div>
    </main>
  );
};

export default MatrixRotationPage;
