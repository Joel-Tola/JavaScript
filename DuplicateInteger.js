class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}

// Example Usage:

const solution = new Solution();

// Example 1
const nums1 = [1, 2, 3, 3];
console.log(solution.hasDuplicate(nums1)); // Output: true

// Example 2
const nums2 = [1, 2, 3, 4];
console.log(solution.hasDuplicate(nums2)); // Output: false