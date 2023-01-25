function highdigit(num){
    let str = Array.from(String(num), Number);
    console.log(str);
    return Math.max(...str);
}

let num = 456;
console.log(highdigit(num));