let i = '1233407080009';
let ii = '4415435475855';

function findnumber(number){
    let numm = Array.from(ii);
    var str = "";
    for(let k = 0 ; k < 10 ; k++){
        let found = numm.find(element => element == k.toString());
        if(found == undefined) str += k.toString() + " ";
    }
    return str;
}

console.log(findnumber(ii));









//หา 0
// let num = Array.from(i);
// console.log(num);

// let e = 0;
// let check = num.map((zero) => {  //หา0
//     if(zero == '0') e+=1;
// });
// console.log("find 0 : " + e + " value");




// let numm = Array.from(ii);
// var str = "dont have ";
// for(let k = 0 ; k < 10 ; k++){
//     let found = numm.find(element => element == k.toString());
//     if(found == undefined) str += k.toString() + " ";
// }
// console.log(str + "in this value");