import { Matrix } from '@/app/matrix-rotation/domain/matrix.interface';
import { InvalidFormatError } from './errors/exceptions';
import { validateMatrix } from './validate-matrix';

export const transformToArray = (input: string): Matrix => {
  try {
    const matrix: Matrix = JSON.parse(input);

    const isValidMatrix = validateMatrix(matrix);

    if (!isValidMatrix) throw new InvalidFormatError();

    return matrix;
  } catch (error) {
    throw new InvalidFormatError();
  }
};
