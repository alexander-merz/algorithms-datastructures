const test = require("node:test");
const assert = require("node:assert");

/*
Sliding Window - maxSubarraySum

Given an array of integers and a number,
write a function called maxSubarraySum,
which finds the maximum sum of a subarray
with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
*/
test("maxSubarraySum", () => {
  assert.strictEqual(maxSubarraySum([100, 200, 300, 400], 2), 700);
  assert.strictEqual(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), 39);
  assert.strictEqual(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2), 5);
  assert.strictEqual(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), 5);
  assert.strictEqual(maxSubarraySum([2, 3], 3), null);
});

function maxSubarraySum(intArray, targetSize) {
  if (targetSize > intArray.length) {
    return null;
  }

  let left = 0;
  let right = 1;
  let maxSum = 0;
  let tempSum = 0;
  let isFirst = true;

  while (right < intArray.length) {
    if (isFirst) {
      tempSum += intArray[left];
      isFirst = false;
      continue;
    }

    tempSum += intArray[right];

    if (right - left === targetSize - 1) {
      maxSum = Math.max(maxSum, tempSum);
      tempSum = 0;
      left++;
      right = left + 1;
      isFirst = true;
    } else {
      right++;
    }
  }

  return maxSum;
}

// course solution
function _maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}
