/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// Time Complexity: O(n)
// Space Complexity: O(min(m, n))
var lengthOfLongestSubstring = function(s) {

    // Space Complexity: usedChars = O(min(m, n))
    //        m = size of Set, n = size of string
    let usedChars = []

    let answer = 0

    // Loop O(n)
    for (let i = 0; i < s.length; i++) {
        if (usedChars.includes(s.charAt(i))) {

            answer = Math.max(answer, usedChars.length)

            usedChars = [s.charAt(i)]

        } else {
            usedChars.push(s.charAt(i))
        }
    }

    return Math.max(answer, usedChars.length)
};
// @lc code=end

let assert = require('assert')

function main() {
    assert.equal(lengthOfLongestSubstring("abcabcbb"), 3)
    assert.equal(lengthOfLongestSubstring("bbbbb"), 1)
    assert.equal(lengthOfLongestSubstring("pwwkew"), 3)
    assert.equal(lengthOfLongestSubstring("abcd"), 4)
}

if (require.main === module) {
    main()
}