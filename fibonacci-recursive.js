// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
/* 
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
16th = 15th + 14th
nth = (n-1)th + (n-2)th
ith  = (i-1)th + (n-2)th
*/

/*
function fibonacci(n){
    if(n < 0 || typeof n != 'number'){
        return 'Give a valid number greater than 2'
    }
    if (n < 2 && n >= 0){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
const fiboElement = fibonacci([31]);
console.log(fiboElement);
*/

function fibonacciSeries(n){
    if(n == 0){
        return [0];
    }
    if(n == 1){
        return [0, 1];
    }
    const fibo = fibonacciSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}
const fiboElement = fibonacciSeries(6);
console.log(fiboElement);