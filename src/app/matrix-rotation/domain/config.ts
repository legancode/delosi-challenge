import { Matrix } from "./matrix.interface";

export const defaultSideSize = 2;

export const defaultGeneratedMatrix: Matrix = Array.from(
  { length: defaultSideSize },
  () => [0, 0]
);

export const defaultFlattenedMatrix = defaultGeneratedMatrix.flat();
