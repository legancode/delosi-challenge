export interface CustomError {
  type: string;
  message: string;
}

export interface ErrorState extends CustomError {
  title: string;
  buttonText: string;
  handleClickButton?: () => void;
}
