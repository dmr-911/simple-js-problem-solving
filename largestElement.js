function largestElement(numbers){
    let element = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if(number > element){
            element = number;
        }
    }
    return element;
}

const numbers = [2, 6, 10, 4, 75, 99, 67];
const largestNumber = largestElement(numbers);
const largestNumber2 = largestElement([-11, -2, -5, -9]);
console.log(largestNumber);
console.log(largestNumber2);

// task : find the lowest element of an array
function lowestElement(numbers){
    let element = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if(number < element){
            element = number;
        }
    }
    return element;
}
const lowestNumber2 = lowestElement([-11, -2, -5, -9]);
console.log(lowestNumber2);