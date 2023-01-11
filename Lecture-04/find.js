let i = 1233407080009;
let ii = 1293652231;

let n = i.toString();
let nn = ii.toString();

//หา 0
let num = [];
for (let i = 0; i < n.length; i++) {
    num[i] = n[i];
    // console.log(num[i]);
}
console.log(num);
let e = 0;
let check = num.map((zero) => {  //หา0
    if(zero == '0'){
        e+=1;
    }
});
console.log("find 0 : " + e + " value");



//ไม่มีเลขไหน
let numm = [];
for (let i = 0; i < nn.length; i++) {
    numm[i] = nn[i];
    // console.log(numm[i]);
}

let str = "dont have ";
for(let k = 0 ; k < 10 ; k++){

    let found = num.find(element => element == k.toString());

    if(found == undefined){
        str += k.toString() + " ";
    }

}
console.log(str + "in this value");