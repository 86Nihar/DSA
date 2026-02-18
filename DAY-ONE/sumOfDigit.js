/*
sum of digit of a number.
1257 = 1+2+5+7
*/

const sumOfDigit = (num)=>{
    let sum = 0;
    while(num>0){
        sum += num%10;
        num = Math.floor(num/10);
    }
    return sum;
}

console.log(sumOfDigit(5494))