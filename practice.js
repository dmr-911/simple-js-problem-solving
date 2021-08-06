// swap
/* 
let a = 5;
let b = 7;
console.log(a, b);

let temp = a;
a = b;
b = temp;
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);
*/

// math
let number = -2.6532;
let absoluteNumber = Math.abs(number);
console.log(absoluteNumber);
let closestNumber = Math.round(absoluteNumber);
console.log(closestNumber);
let floorNumber = Math.floor(absoluteNumber);
console.log(floorNumber);
let cillingNumber = Math.ceil(absoluteNumber);
console.log(cillingNumber);

console.log('this is random values');
for( let i = 0; i < 10; i++){
    let output = Math.random()*15;
    let rounded = Math.round(output);
    console.log(rounded);
}

// Max min Numbers
console.log('max min numbers');
let num1 = 12;
let num2 = 33;
let num3 = 6;
const maxNumber = Math.max(num1, num2, num3);
const minNumber = Math.min(num1, num2, num3);
console.log(maxNumber, minNumber);

// sum 
console.log('this is sum of the values of an array');
let numbers = [2, 5, 6, 8, 91, 11, 4];
function sumOfValues(numbersArray){
            let givenNumber = 0;
            for(let i = 0; i < numbersArray.length; i++){
                givenNumber = givenNumber + numbersArray[i];
             }
             return givenNumber;
}
const sumOfArray = sumOfValues(numbers);
console.log(sumOfArray);

// largest and lowest numbers
console.log('This is largest and lowest numbers');
let negativeNumbers = [-2, -3, 0, -11, 11];
function largestNumber(numbersArray){
    let number = numbersArray[0];
    for(let i = 0; i < numbersArray.length; i++){
        if(number < numbersArray[i]){
            number = numbersArray[i];
        }
    }
    return number;
}
function lowestNumber(numbersArray){
    let number = numbersArray[0];
    for(let i = 0; i < numbersArray.length; i++){
        if(number > numbersArray[i]){
            number = numbersArray[i];
        }
    }
    return number;
}
const largeNumber = largestNumber(numbers);
const lowNumber = lowestNumber(negativeNumbers);
console.log(largeNumber, lowNumber);

// fibonacci 
console.log('Fibonacci using loop');
let fibo = [0, 1];
for(i = 2; i <= 10; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

function fibonacci(number){
    let fibo = [0, 1];
    for(i = 2; i <= number; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const myFabonacci = fibonacci(5);
console.log(myFabonacci);

// fibonacci recursive
function fibonacciNumber(number){
    if(typeof number != 'number'){
        return 'Enter a valid number greater than 2'
    }
    if(number < 2 && number >=0){
        return number;
    }
    return fibonacciNumber(number -1) + fibonacciNumber(number-2);
}
function fibonacciSeries(number){
    if(typeof number != 'number'){
        return 'Enter a valid number greater than 2'
    }
    if(number == 0){
        return [0];
    }
    if(number == 1){
        return [0, 1];
    }
    let fibo = fibonacciSeries(number  - 1);
    fibo[number] = fibo[number - 1] + fibo[number - 2];
    return fibo;
}
const myRecursiveNumber = fibonacciNumber(6);
const myRecursiveSeries = fibonacciSeries(3)
console.log(myRecursiveNumber);
console.log(myRecursiveSeries);