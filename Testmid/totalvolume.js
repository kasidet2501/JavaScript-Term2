function total(arr){
    let sum = 0;

    for(let i = 0 ; i < arr.length ; i++){
        let inn = 1;
        for(let n = 0 ; n < arr[i].length ; n++){
            inn *= arr[i][n];
        }
        sum += inn;
    }
    return sum;

}

let arr = [[2,3,2],[6,6,7],[1,2,1]];
console.log(total(arr));
