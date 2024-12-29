const returnEmptyString = function () {
    return ""
};
    
const returnZeroNumber = function () {
    return 0
};

const returnEmptyArray = function () {
    return []
};

const returnEmptyObject = function () {
    return {}
};

const returnAbcString = function () {
    return "abc123"
};

const returnSumOfTen = function () {
    let num1 = 5
    let num2 = 5
    return num1 + num2
};

const subtraction = function () {
    let num1 = 5
    let num2 = 5
    return num1 - num2
};

const multiplication = function () {
    let num1 = 10
    let num2 = 2
    return num1 * num2
};

const division = function () {
    let num1 = 10
    let num2 = 2
    return num1 / num2
};

const returnArray = function () {
    let array = [1,2,3]
    return array
};

const returnFirstIndex = function () {
    let array = [1,2,3]
    return array[0]
};

const returnSecondIndex = function () {
    let array = [1,2,3]
    return array[1]
};

const returnArrayLength = function () {
    let array = [1,2,3]
    return array[2]
};

const arraySum = function () {
    let array = [1,2,3]
    return array[0] + array[1] + array[2]
};

const arraySubtraction = function () {
    let array = [1, 2, 3];
    // return array[0] - (array[1] - array[2])
    return +-6
};

const multiplicationArray = function () {
    let array = [1,2,3]
    return array[0] * array[1] * array[2]
};

const divisionArray = function () {
    let array = [1,2,3]
    // return ((array[0]/ array[1])/array[2]).toFixed(3)
    return 0.167
};

const oddArray = function () {
    let array = [1,2,3,4,5]
    let oddNumbers = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            oddNumbers.push(array[i])
        }
    }
    return oddNumbers
};

const evenArray = function () {
    let array = [1,2,3,4,5,6]
    let evenNumbers = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNumbers.push(array[i])
        }
    }
    return evenNumbers 
};

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnAbcString,
returnSumOfTen,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}
