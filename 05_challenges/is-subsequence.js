const test = require("node:test");
const assert = require("node:assert");

/**
 * Write a function called isSubsequence which takes in two strings
 * and checks whether the characters in the first string
 * form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the first string
 * appear somewhere in the second string, without their order changing.
 *
 * Your solution MUST have AT LEAST the following complexities:
 *
 * Time Complexity - O(N + M)
 *
 * Space Complexity - O(1)
 *
 * @example
 * isSubsequence('hello', 'hello world'); // true
 * isSubsequence('sing', 'sting'); // true
 * isSubsequence('abc', 'abracadabra'); // true
 * isSubsequence('abc', 'acb'); // false (order matters)
 */
function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
    }

    pointer2++;

    if (pointer1 === str1.length) {
      return true;
    }
  }

  return false;
}

test("isSubsequence", () => {
  assert.strictEqual(isSubsequence("hello", "hello world"), true);
  assert.strictEqual(isSubsequence("sing", "sting"), true);
  assert.strictEqual(isSubsequence("abc", "abracadabra"), true);
  assert.strictEqual(isSubsequence("abc", "acb"), false);
});

// course solution
function isSubsequenceSolution(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
