const test = require("node:test");
const assert = require("node:assert");

function averagePair(sortedArray, targetAverage) {
  if (sortedArray.length < 2) {
    return false;
  }

  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    const avg = (sortedArray[left] + sortedArray[right]) / 2;

    if (avg === targetAverage) {
      return true;
    }

    if (avg > targetAverage) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

test("averagePair", () => {
  assert.strictEqual(averagePair([1, 2, 3], 2.5), true);
  assert.strictEqual(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), true);
  assert.strictEqual(averagePair([-1, 0, 3, 4, 5, 6], 4.1), false);
  assert.strictEqual(averagePair([], 4), false);
});
