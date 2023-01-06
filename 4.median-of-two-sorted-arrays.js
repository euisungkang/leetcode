/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//Time Complexity Restraint: O(log (m + n))
var findMedianSortedArrays = function(nums1, nums2) {
    
};
// @lc code=end

let assert = require('assert')

function main() {
    assert.equal(findMedianSortedArrays([1,3], [2]), 2.00000)
    //assert.equal(findMedianSortedArrays([1,2], [3,4]), 2.50000)
}

if (require.main === module) {
    main()
}