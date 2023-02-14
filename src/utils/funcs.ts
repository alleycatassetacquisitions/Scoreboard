import { itemType } from 'types';

export const returnSortedArrayOfObjects = (arr: itemType[]) => {
  return arr.sort((a, b) => b.score - a.score);
};
