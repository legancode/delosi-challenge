export const throwUnhandledActionError = (type: string): void => {
  throw new Error(`Unknown type: ${type}`);
};
