const sumAll = function(int1, int2) {
    let finalSum = 0;

    let numbers = [int1,int2];
    let checkElems = numbers.filter((num) => Number.isInteger(num) && num >= 0);
    if (checkElems.length === 2) {
        let start = Math.min(int1, int2);
        let end = Math.max(int1, int2);
        for (let i = start; i <= end; i++) {
            finalSum += i;
        }
        return finalSum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
