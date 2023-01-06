/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (hash.has(target - nums[i])) {
            return [hash.get(target - nums[i]), i]
        } else {
            hash.set(nums[i], i)
        }
    }

    return []
};
// @lc code=end

let assert = require('assert')

function main() {
    assert.deepEqual(twoSum([2,7,11,15], 9), [0,1])
    assert.deepEqual(twoSum([3,2,4], 6), [1,2])
    assert.deepEqual(twoSum([3,3,], 6), [0,1])
}

if (require.main === module) {
    main()
}