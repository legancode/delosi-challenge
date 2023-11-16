import { Matrix } from '@/app/matrix-rotation/domain/matrix.interface';

export const validateMatrix = (matrix: Matrix): boolean => {
  if (!Array.isArray(matrix)) return false;

  if (!matrix.length) return false;

  if (!matrix.every((row) => Array.isArray(row))) return false;

  if (!matrix.every((row) => row.length === matrix.length)) return false;

  return true;
};
