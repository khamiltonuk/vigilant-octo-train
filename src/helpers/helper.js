import { map, flow } from "lodash/fp";

export function calculateOperation(valuesArr, operation) {
  let anwser;
  switch (operation) {
    case "Get Variance":
      anwser = getVariance(valuesArr);
      break;
    case "Mean of All Squared":
      anwser = meanOfAllSquared(valuesArr);
      break;
    case "Mean All":
      anwser = meanAll(valuesArr);
      break;
    case "Square All":
      anwser = squareAll(valuesArr);
      break;
    case "Add All":
      anwser = addAll(valuesArr);
      break;
    default:
      anwser = 0;
  }
  return anwser;
}

export const squareAll = map(num => num * num);

export function add(arr) {
  return arr.reduce((a, b) => a + b);
}

export const addAll = flow(
  stringToNumbers,
  add
);

export function meanAll(arr) {
  return addAll(arr) / arr.length;
}

export const meanOfAllSquared = flow(
  squareAll,
  meanAll
);

export function getVariance(arr) {
  const mean = meanAll(arr);
  return arr.map(int => {
    return int - mean;
  });
}

export function stringToNumbers(arr) {
  return arr
    .map(int => {
      return parseInt(int, 10);
    })
    .filter(val => {
      return !isNaN(val);
    });
}
