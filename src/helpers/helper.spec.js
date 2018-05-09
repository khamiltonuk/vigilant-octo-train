function squareAll(numbers) {
  return numbers.map(num => num * num);
}

it("renders without crashing", () => {
  expect(squareAll([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
});
