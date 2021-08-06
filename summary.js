const selected = [];
for(let i = 0; i < 10; i++){
    const random = Math.random()*100;
    const rounded = Math.round(random);
    if(selected.indexOf(rounded) == -1){
        selected.push(rounded);
    }
    else{
        console.log('Found duplicate', rounded, selected);
    }
}
console.log(selected);

const number = -78;
const answer = Math.abs(number);
console.log(typeof answer);