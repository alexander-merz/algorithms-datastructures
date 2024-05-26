const test = require("node:test");
const assert = require("node:assert");

/**
 * Sliding Window Pattern
 *
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 *
 * Example:
 * maxSubarraySum([1,2,5,2,8,1,5],2) // 10
 * maxSubarraySum([1,2,5,2,8,1,5],4) // 17
 * maxSubarraySum([4,2,1,6],1) // 6
 * maxSubarraySum([4,2,1,6,2],4) // 13
 * maxSubarraySum([],4) // null
 */

test("maxSubarraySum", () => {
  assert.strictEqual(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), 10);
  assert.strictEqual(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), 17);
  assert.strictEqual(maxSubarraySum([4, 2, 1, 6], 1), 6);
  assert.strictEqual(maxSubarraySum([4, 2, 1, 6, 2], 4), 13);
  assert.strictEqual(maxSubarraySum([], 4), null);
});

/**
 * naive solution
 * bad time complexity O(n**2)
 * good space complexity O(1)
 */
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

test("max_subarray_sum", () => {
  assert.strictEqual(max_subarray_sum([1, 2, 5, 2, 8, 1, 5], 2), 10);
  assert.strictEqual(max_subarray_sum([1, 2, 5, 2, 8, 1, 5], 4), 17);
  assert.strictEqual(max_subarray_sum([4, 2, 1, 6], 1), 6);
  assert.strictEqual(max_subarray_sum([4, 2, 1, 6, 2], 4), 13);
  assert.strictEqual(max_subarray_sum([], 4), null);
});

/**
 * better solution
 * good time complexity O(n)
 * good space complexity O(1)
 */
function max_subarray_sum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
