/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = function (s) {
  let longest = '';
  const palindroms = [];

  // First we initilize palaindroms with ALL palindroms of length 1 and 2
  // Each char in a string is a palindrom in it self of lenght 1
  // As we iterate thru string to find palindroms of lenght one we
  // also find palindroms of lenght 2 since if the char next to
  // the char we are currently exmining are equal then that is a palindrome
  // of length 2
  for (let i = 0; i < s.length; i++) {
    palindroms.push([i, 1]);
    if (s[i].length > longest.length) longest = s[i];
    if (i <= s.length - 2 && s[i] === s[i + 1]) {
      palindroms.push([i, 2]);
      const candidate = `${s[i]}${s[i]}`;
      if (candidate.length > longest.length) {
        longest = candidate;
      }
    }
  }

  // We then iterate thru palindroms to find palindroms of greater length
  // This works because you just need to look to the right and left of current palindrom.
  // If those two chars are equal then we have a new palindrom.
  while (palindroms.length > 0) {
    const candidateCoords = palindroms.shift();
    const left = candidateCoords[0] - 1;
    const right = candidateCoords[0] + candidateCoords[1];
    if (left >= 0 && right < s.length && s[left] === s[right]) {
      const palindrom = s.slice(left, right + 1);
      palindroms.push([left, right - left + 1]);
      if (palindrom.length > longest.length) longest = palindrom;
    }
  }

  return longest;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('a'));
console.log(longestPalindrome('bb'));
console.log(longestPalindrome('caba'));
console.log(longestPalindrome('aaaaa'));
