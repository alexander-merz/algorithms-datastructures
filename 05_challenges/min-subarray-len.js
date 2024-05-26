const test = require("node:test");
const assert = require("node:assert");

/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters:
an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum
is greater than or equal to the integer passed to the function.
If there isn't one, return 0 instead.

Time Complexity - O(n)

Space Complexity - O(1)
*/
test("minSubArrayLen", () => {
  assert.strictEqual(minSubArrayLen([2, 3, 1, 2, 4, 3], 7), 2);
  assert.strictEqual(minSubArrayLen([2, 1, 6, 5, 4], 9), 2);
  assert.strictEqual(
    minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52),
    1
  );
  assert.strictEqual(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), 3);
  assert.strictEqual(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), 5);
  assert.strictEqual(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), 2);
  assert.strictEqual(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95), 0);
});

// minSubArrayLen([2, 3, 1, 2, 4, 3], 7) === 2
function minSubArrayLen(array, target) {
  let counter = 0;
  let minLen = 0;
  let start = 0;
  let end = 0;

  for (let i = 0; i < array.length; i++) {
    counter += array[i];

    if (counter >= target) {
      if (i === 0) {
        return 1;
      }

      end = i;
      minLen = end + 1;

      break;
    }
  }

  while (counter >= target) {
    counter -= array[start];
    start++;
  }
}
