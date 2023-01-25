function sumtwo(arr){

    let newarr = arr.filter((num) => num >= 0); //กรองเลขที่ไม่ติดลบ
    let min1 = Math.min(...newarr);

    newarr = newarr.filter((num) => num !== min1);

    let min2 = Math.min(...newarr);
        
    return min1 + min2;
}

let arr = [2,9,6,-1];
console.log(sumtwo(arr));