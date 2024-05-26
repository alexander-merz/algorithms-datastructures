const test = require("node:test");
const assert = require("node:assert");

/**
 * Binary Search
 *
 * Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
 * Otherwise, return -1.
 *
 * Example:
 * binarySearch([1,2,3,4,5],2) // 1
 * binarySearch([1,2,3,4,5],3) // 2
 * binarySearch([1,2,3,4,5],5) // 4
 */

test("binarySearch", () => {
  assert.strictEqual(binarySearch([1, 2, 3, 4, 5], 2), 1);
  assert.strictEqual(binarySearch([1, 2, 3, 4, 5], 3), 2);
  assert.strictEqual(binarySearch([1, 2, 3, 4, 5], 5), 4);
  assert.strictEqual(binarySearch([1, 2, 3, 4, 5], 6), -1);
  assert.strictEqual(binarySearch([1, 2, 3, 4, 5], 0), -1);
});

/**
 * naive solution
 * time complexity O(n)
 */
function binarySearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

test("binary_search", () => {
  assert.strictEqual(binary_search([1, 2, 3, 4, 5], 2), 1);
  assert.strictEqual(binary_search([1, 2, 3, 4, 5], 3), 2);
  assert.strictEqual(binary_search([1, 2, 3, 4, 5], 5), 4);
  assert.strictEqual(binary_search([1, 2, 3, 4, 5], 6), -1);
  assert.strictEqual(binary_search([1, 2, 3, 4, 5], 0), -1);
});

/**
 * better solution
 * time complexity O(log n)
 */
function binary_search(arr, target) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middleIndex = Math.floor((min + max) / 2);
    let middleValue = arr[middleIndex];

    if (middleValue < target) {
      min = middleIndex + 1;
    } else if (middleValue > target) {
      max = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }

  return -1;
}
