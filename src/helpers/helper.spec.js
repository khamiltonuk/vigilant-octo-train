import { map, reduce, flow } from "lodash/fp";

const squareAll = map(num => num * num);

function addAll(arr) {
  return arr.reduce((a, b) => a + b);
}

function averageAll(arr) {
  return addAll(arr) / arr.length;
}
const meanOfAllSquared = flow(squareAll, averageAll);

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

describe("averageAll", () => {
  test("should compute the mean value of the list of numbers", () => {
    expect(averageAll([1, 2, 3, 4])).toEqual(2.5);
  });
});

describe("meanOfAllSquared", () => {
  test("should compute the mean value of the numbers squared in the list", () => {
    expect(meanOfAllSquared([1, 2, 3, 4])).toEqual(2.5);
  });
});
