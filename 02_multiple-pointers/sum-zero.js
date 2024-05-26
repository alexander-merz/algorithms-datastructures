const test = require("node:test");
const assert = require("node:assert");

/**
 * Multiple Pointers Pattern
 *
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 *
 * Example:
 * sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * sumZero([-2,0,1,3]) // undefined
 * sumZero([1,2,3]) // undefined
 */

test("sumZero", () => {
  assert.deepStrictEqual(sumZero([-3, -2, -1, 0, 1, 2, 3]), [-3, 3]);
  assert.deepStrictEqual(sumZero([-2, 0, 1, 3]), undefined);
  assert.deepStrictEqual(sumZero([1, 2, 3]), undefined);
});

/**
 * Naive solution O(n**2)
 */
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

test("sum_zero", () => {
  assert.deepStrictEqual(sum_zero([-3, -2, -1, 0, 1, 2, 3]), [-3, 3]);
  assert.deepStrictEqual(sum_zero([-2, 0, 1, 3]), undefined);
  assert.deepStrictEqual(sum_zero([1, 2, 3]), undefined);
});

/**
 * Better solution O(n)
 */
function sum_zero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
