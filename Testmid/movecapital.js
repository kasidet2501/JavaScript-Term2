function move(str){
    let arr = Array.from(str);
    console.log(arr);
    let first = "";
    let last = "";

    for(let i = 0 ; i < arr.length ; i++){
        (arr[i] === arr[i].toUpperCase())? first += arr[i] : last += arr[i];
    }
    return (first.concat(last));

}

let str = "moveMENT";
console.log(move(str));
