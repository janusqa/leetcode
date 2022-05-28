/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function groupAnagrams(strs) {
    const anagramsGroup = {};

    for (let str of strs) {
        const sstr = str.split('').sort().join('');
        if (anagramsGroup.hasOwnProperty(sstr)) anagramsGroup[sstr].push(str);
        else anagramsGroup[sstr] = [str];
    }

    // for (let anagrams of anagramsGroupDict.values) {
    //     anagramsGroup.push(anagrams);
    // }

    // for (let str of strs) {
    //     if (anagramsGroup.length == 0) {
    //         anagramsGroup.push([str]);
    //         continue;
    //     }

    //     let toExisting = false;
    //     for (let anagrams of anagramsGroup) {
    //         if (isAnagram(anagrams[0], str)) {
    //             anagrams.push(str);
    //             toExisting = true;
    //             break;
    //         }
    //     }
    //     if (!toExisting) {
    //         anagramsGroup.push([str]);
    //     }
    // }
    return Object.values(anagramsGroup);
};

// const isAnagram = function isAnagram(s, t) {
//     const seen = {};
//     if (s.length !== t.length) {
//         return false;
//     }

//     for (let c of s) {
//         if (c in seen) {
//             seen[c] += 1;
//         } else {
//             seen[c] = 1;
//         }
//     }

//     for (let c of t) {
//         if (!(c in seen)) {
//             return false;
//         }
//         if (seen[c] < 1) {
//             return false;
//         }

//         seen[c] -= 1;
//     }

//     return true;
//};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));
console.log(groupAnagrams(['', '']));
