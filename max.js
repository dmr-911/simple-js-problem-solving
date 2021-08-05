let police = 450;
let rab = 500;
let army = 900;
// const maxNumber = Math.max(police, rab, army);
// console.log('Largest is ', maxNumber);

// task 1:Create a function  that takes three parameters and returns you the largest number of the  three
function max(number1, number2, number3){
    const largestNumber = Math.max(number1, number2, number3);
    return largestNumber;
}
const myMaxNumber = max(police, rab, army);
console.log('Largest number is ', myMaxNumber);

// task 2: find the smallest of the three numbers
function minimum(number1, number2, number3){
    const smallestNumber = Math.min(number1, number2, number3);
    return smallestNumber;
}
const mySmallestNumber = minimum(police, rab, army);
console.log('Smallest number is ', mySmallestNumber);