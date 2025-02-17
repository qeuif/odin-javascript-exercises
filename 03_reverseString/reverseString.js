const reverseString = function(string) {
    let endPointer = string.length - 1;
    let res = "";
    for (let i = endPointer; i >= 0; i--) {
        res += string.charAt(i);
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
