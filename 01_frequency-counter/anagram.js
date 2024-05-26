const test = require("node:test");
const assert = require("node:assert");

/**
 * Frquency Counter Pattern
 * ------------------------
 *
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 *
 * Example:
 * isAnagram('', '') // true
 * isAnagram('aaz', 'zza') // false
 * isAnagram('anagram', 'nagaram') // true
 * isAnagram('rat', 'car') // false
 * isAnagram('awesome', 'awesom') // false
 * isAnagram('qwerty', 'qeywrt') // true
 * isAnagram('texttwisttime', 'timetwisttext') // true
 */

test("isAnagram", () => {
  assert.strictEqual(isAnagram("", ""), true);
  assert.strictEqual(isAnagram("aaz", "zza"), false);
  assert.strictEqual(isAnagram("anagram", "nagaram"), true);
  assert.strictEqual(isAnagram("rat", "car"), false);
  assert.strictEqual(isAnagram("awesome", "awesom"), false);
  assert.strictEqual(isAnagram("qwerty", "qeywrt"), true);
  assert.strictEqual(isAnagram("texttwisttime", "timetwisttext"), true);
});

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var freqCntr1 = {};
  var freqCntr2 = {};
  for (var char of str1) {
    freqCntr1[char] = (freqCntr1[char] ?? 0) + 1;
  }
  for (var char of str2) {
    freqCntr2[char] = (freqCntr2[char] ?? 0) + 1;
  }
  for (var key in freqCntr1) {
    if (freqCntr1[key] === freqCntr2[key]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
