const test = require("node:test");
const assert = require("node:assert");

/**
 * Multiple Pointers Pattern
 * -------------------------
 *
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 *
 * Example:
 * countUniqueValues([1,1,1,1,1,2]) // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * countUniqueValues([]) // 0
 * countUniqueValues([-2,-1,-1,0,1]) // 4
 */

test("countUniqueValues", () => {
  assert.strictEqual(countUniqueValues([1, 1, 1, 1, 1, 2]), 2);
  assert.strictEqual(
    countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]),
    7
  );
  assert.strictEqual(countUniqueValues([]), 0);
  assert.strictEqual(countUniqueValues([-2, -1, -1, 0, 1]), 4);
});

/* Cheating */
function _countUniqueValues(arr) {
  return new Set(arr).size;
}

/**
 * good time complexity O(n)
 * bad space complexity O(n)
 */
function countUniqueValues(arr) {
  // const obj = {};
  // for (const num of arr) {
  //   obj[num] = num;
  // }
  // return Object.keys(obj).length;
  // 2 loops -> improvement down below
  let counter = 0;
  const seenValues = {};
  for (const num of arr) {
    if (num in seenValues) {
      continue;
    } else {
      seenValues[num] = 1;
      counter++;
    }
  }
  return counter;
}

test("count_unique_values", () => {
  assert.strictEqual(count_unique_values([1, 1, 1, 1, 1, 2]), 2);
  assert.strictEqual(
    count_unique_values([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]),
    7
  );
  assert.strictEqual(count_unique_values([]), 0);
  assert.strictEqual(count_unique_values([-2, -1, -1, 0, 1]), 4);
});

/**
 * good time complexity O(n)
 * good space complexity O(1) by altering input array
 */
function count_unique_values(arr) {
  if (arr.length < 2) {
    return arr.length;
  }

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }

  return i + 1;
}
