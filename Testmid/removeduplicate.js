function removeDups(arr){
    // let num = arr.map((number) => {
    //     return number;
    // })
    let newarr = [];
    for(let i = 0 ; i < arr.length ; i++){
        let str = arr[i];
        if(newarr.indexOf(str) == -1){
            newarr.push(str);
        }
    }
    return newarr;

}

let arr1 = [1,0,1,0];
let arr2 = ["the","big","cat"];
let arr3 = ["the","big","the"];
console.log(removeDups(arr1));
console.log(removeDups(arr2));
console.log(removeDups(arr3));