import { map, flow } from "lodash/fp";

export const squareAll = map(num => num * num);

export function add(arr) {
  return arr.reduce((a, b) => a + b);
}

export const addAll = flow(stringToNumbers, add);

export function meanAll(arr) {
  return addAll(arr) / arr.length;
}

export const meanOfAllSquared = flow(squareAll, meanAll);

export function getVariance(arr) {
  const mean = meanAll(arr);
  return arr.map(int => {
    return int - mean;
  });
}

export function stringToNumbers(arr) {
  return arr.map(int => {
    return parseInt(int, 10);
  });
}
