import { CustomException } from '@/domain/custom-exceptions.enum';

export class InvalidFormatError extends Error {
  public readonly type: string;

  constructor(message?: string) {
    super(message);
    this.type = CustomException.InvalidFormatError;
  }
}
