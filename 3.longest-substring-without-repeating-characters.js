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

// Time Complexity: 2O(n) = O(n)
var lengthOfLongestSubstring = function(s) {
    let usedChars = []
    let longestString = ""

    // Loop O(n)
    for (let i = 0; i < s.length; i++) {
        if (usedChars.includes(s.charAt(i))) {

            //toString/join O(n)
            if (longestString.length < usedChars.length)
                longestString = usedChars.join('')
            usedChars = [s.charAt(i)]

        } else {
            usedChars.push(s.charAt(i))
        }
    }

    return Math.max(longestString.length, usedChars.length)
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