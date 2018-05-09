import { map, reduce } from "lodash/fp";

const squareAll = map(num => num * num);

function addAll(arr) {
  return arr.reduce((a, b) => a + b);
}

function averageAll(arr) {
  return addAll(arr) / arr.length;
}

describe("squareAll", () => {
  test("sqaures all numbers in an array", () => {
    expect(squareAll([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
  });
});

describe("addAll", () => {
  test("adds all numbers in an array", () => {
    expect(addAll([1, 2, 3, 4])).toEqual(10);
  });
});

describe("averageAll", () => {
  test("should finds the mean of all the numbers", () => {
    expect(averageAll([1, 2, 3, 4])).toEqual(2.5);
  });
});
