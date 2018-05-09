import { map, reduce, flow } from "lodash/fp";

const squareAll = map(num => num * num);

function addAll(arr) {
  return arr.reduce((a, b) => a + b);
}

function meanAll(arr) {
  return addAll(arr) / arr.length;
}

const meanOfAllSquared = flow(squareAll, meanAll);

function getVariance(arr) {
  const mean = meanAll(arr);
  return arr.map(int => {
    return int - mean;
  });
}

describe("squareAll", () => {
  test("sqaures all numbers in an array", () => {
    expect(squareAll([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
  });
});

describe("addAll", () => {
  test("should compute the sum of the list of numbers", () => {
    expect(addAll([1, 2, 3, 4])).toEqual(10);
  });
});

describe("meanAll", () => {
  test("should compute the mean value of the list of numbers", () => {
    expect(meanAll([1, 2, 3, 4])).toEqual(2.5);
  });
});

describe("meanOfAllSquared", () => {
  test("should compute the mean value of the numbers squared in the list", () => {
    expect(meanOfAllSquared([1, 2, 3, 4])).toEqual(7.5);
  });
});

describe("getVariance", () => {
  test("should compute the variance of the numbers in the list", () => {
    expect(getVariance([1, 2, 3, 4])).toEqual([-1.5, -0.5, 0.5, 1.5]);
  });
});
