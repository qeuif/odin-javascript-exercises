const removeFromArray = function(array, ...removedValues) {
    let res = [];
    for (const item of array) {
        let isMatch = false;
        for (const elemToBeRemoved of removedValues) {
            if (elemToBeRemoved === item) {
                isMatch = true;
            }
        }
        if (isMatch === false) {
            res.push(item);
        }
    }
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
