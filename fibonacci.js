/* const numbers = [0, 1];
for(let i = 2; i < 10; i++){
    numbers[i] = numbers[i - 1] + numbers[i - 2];
}
console.log(numbers); */

function fibonacciSeries(numbers){
    if(typeof numbers != 'number' || numbers < 2){
        return 'Please give a valid number which is greater than 1'
    }
    let fibo = [0, 1];
    for(let i = 2; i <= numbers; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const mySeries = fibonacciSeries([11]);
console.log(mySeries);