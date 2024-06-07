/**
 *
 * Is Anagram
 * Solved
 * Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 * Example 1:
 * Input: s = "racecar", t = "carrace"
 * Output: true
 * Example 2:
 * Input: s = "jar", t = "jam"
 * Output: false
 * Constraints:
 * s and t consist of lowercase English letters.
 */
class Solution {
  /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const charCount = {};

    // Count characters in the first string
    for (let char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract counts using the second string
    for (let char of t) {
      if (!charCount[char]) {
        return false;
      }
      charCount[char]--;
      if (charCount[char] < 0) {
        return false;
      }
    }

    return true;
  }
}

// Example Usage:

const solution = new Solution();

// Example 1
const s1 = "racecar";
const t1 = "carrace";
console.log(solution.isAnagram(s1, t1)); // Output: true

// Example 2
const s2 = "jar";
const t2 = "jam";
console.log(solution.isAnagram(s2, t2)); // Output: false
