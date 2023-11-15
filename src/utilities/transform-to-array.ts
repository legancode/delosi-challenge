import { Matrix } from "@/app/matrix-rotation/domain/matrix.interface";

export const transformToArray = (input: string): Matrix | null => {
  const matrix: Matrix = JSON.parse(input);

  if (!Array.isArray(matrix) || !matrix.every((row) => Array.isArray(row))) {
    throw new Error("El formato de la matriz no es válido");
  }

  return matrix;
};
