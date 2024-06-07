/**
 * 
 * Two Integer Sum
 * Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
 * You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
 * Return the answer with the smaller index first.
 * Example 1:
 * Input: 
 * nums = [3,4,5,6], target = 7
 * Output: [0,1]
 * Explanation: nums[0] + nums[1] == 7, so we return [0, 1].
 * Example 2:
 * Input: nums = [4,5,6], target = 10
 * Output: [0,2]
 * Example 3:
 * Input: nums = [5,5], target = 10
 * Output: [0,1]
 * Constraints:
 * 2 <= nums.length <= 1000
 * -10000 <= nums[i] <= 10000
 * -10000 <= target <= 10000
 */
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numToIndex = new Map(); // To store the numbers and their indices
        
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            
            if (numToIndex.has(complement)) {
                return [numToIndex.get(complement), i]; // Found the pair
            }
            
            numToIndex.set(nums[i], i);
        }
        
        return []; // This line is never reached because the problem guarantees a solution
    }
}

// Example Usage:

const solution = new Solution();

// Example 1
let nums1 = [3, 4, 5, 6];
let target1 = 7;
console.log(solution.twoSum(nums1, target1)); // Output: [0, 1]

// Example 2
let nums2 = [4, 5, 6];
let target2 = 10;
console.log(solution.twoSum(nums2, target2)); // Output: [0, 2]

// Example 3
let nums3 = [5, 5];
let target3 = 10;
console.log(solution.twoSum(nums3, target3)); // Output: [0, 1]

// Example 4
let nums4 = [3, 4, 5, 6];
let target4 = 12;
console.log(solution.twoSum(nums4, target4)); // Output: []