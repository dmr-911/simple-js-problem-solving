let first = 5;
let second = 7;
console.log(first, second);

// First approach
// let temp = first;
// first = second;
// second = temp;
// console.log(first , second);

// distructuring
[first, second] = [second, first];
console.log(first, second);