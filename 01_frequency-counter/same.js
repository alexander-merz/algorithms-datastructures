const test = require("node:test");
const { strictEqual } = require("node:assert");

/**
 * Write a function which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 *
 * Example:
 * same([1,2,3], [4,1,9]) // true
 * same([1,2,3], [1,9]) // false
 * same([1,2,1], [4,4,1]) // false (must be same frequency)
 */

test("same", () => {
  strictEqual(same([1, 2, 3], [4, 1, 9]), true);
  strictEqual(same([1, 2, 3], [1, 9]), false);
  strictEqual(same([1, 2, 1], [4, 4, 1]), false);
});

/**
 * time complexity: O(n**2)
 * space complexity: O(1)
 */
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // loop
  for (const num of arr1) {
    // nested loop
    const index = arr2.indexOf(num ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
}

test("same2", () => {
  strictEqual(same2([1, 2, 3], [4, 1, 9]), true);
  strictEqual(same2([1, 2, 3], [1, 9]), false);
  strictEqual(same2([1, 2, 1], [4, 4, 1]), false);
});

/**
 * Frequency Counter Pattern
 * time complexity: O(n)
 * space complexity: O(n)
 */
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // multiple individual loops are better than nested
  for (const num1 of arr1) {
    frequencyCounter1[num1] = (frequencyCounter1[num1] ?? 0) + 1;
  }
  for (const num2 of arr2) {
    frequencyCounter2[num2] = (frequencyCounter2[num2] ?? 0) + 1;
  }
  for (const key in frequencyCounter1) {
    const value = frequencyCounter1[key];
    if (
      key ** 2 in frequencyCounter2 &&
      value === frequencyCounter2[key ** 2]
    ) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
