let numbers = [32, 44, 82, 93, 56, 1];

// adding numbers using for loop
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    sum = sum + number;
}
console.log(sum);

// adding numbers using a function
function total(numbers){
    let sum = 0;
    for(let i =0; i < numbers.length; i++){
        const number = numbers[i];
        sum = sum + number;
    }
    return sum;
}
var totalSum = total(numbers);
console.log(totalSum);