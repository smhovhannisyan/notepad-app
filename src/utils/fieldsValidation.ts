type ValidationLengthType = (value: string, length: number) => boolean;

type ValidationIsEmptyType = (value: string) => boolean;

export const isEmpty: ValidationIsEmptyType = (value) => !value;

export const checkCharLength: ValidationLengthType = (value, length) => {
  if (value.length > length) {
    return true;
  }
  return false;
};
