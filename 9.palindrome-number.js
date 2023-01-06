/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// [COMPLETE]
// Done without conversion to string
// Space: O(1)
// Time: O(1)
var isPalindrome = function(x) {
    if (x < 0)
        return false

    while (x >= 0) {
        let largestDivisor10 = Math.pow(10, Math.floor(Math.log10(x)))

        let first = Math.trunc(x / largestDivisor10)
        let last = x % (Math.trunc(x/10) * 10)

        x = x - largestDivisor10
        x = x - (x - last)

        if (first != last)
            return false

        if (x < 10)
            return true
    }
};
// @lc code=end

let assert = require('assert')

function main() {
    //isPalindrome(121)
    assert.ok(isPalindrome(121))
    assert.ok(!isPalindrome(-121))
    assert.ok(!isPalindrome(10))
}

if (require.main === module) {
    main()
}