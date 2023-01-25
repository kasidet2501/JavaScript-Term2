function numsplit(num){
    let sum = 0;
    for(let i = 0 ; i < num.length ; i++){
        sum += num[i];
    }
    return sum;
}

let num = [-5,-4];
console.log(numsplit(num));