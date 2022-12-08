

const stringRandom = ['cook', 'taste', 'aves', 'vase', 'state', 'map', 'estat'];

function group(input) {
    let result = [];
    if (input.length === 0) {
        return result;
    }

    for (let i = 0; i < input.length; i++) {
        let check = true;
        for (let j = 0; j < result.length; j++) {
            // console.log();
            if (checkStringInArray(result[j], input[i])) {
                check = false;
            }
        }
        if (check) {
            result.push(checkAnagrams(input, i));
        }
    }

    return result;
}

function checkStringInArray(array, string) {
    for (var i in array) {
        if (array[i] == string) return true;
    }
    return false;
}

function checkAnagrams(aStr, i) {
    let anagrams = [];
    anagrams.push(aStr[i]);
    for (let j = 0; j < aStr.length; j++) {
        if (i !== j) {
            if (anagram(aStr[i], aStr[j])) {
                anagrams.push(aStr[j]);
            }
        }
    }
    return anagrams;
}


function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const result = {};
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        result[char] = result[char] ? result[char] += 1 : result[char] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if (!result[char]) {
            return false;
        }
        else {
            result[char] = -1;
        }
    }
    return true;
}


console.log(group(stringRandom));