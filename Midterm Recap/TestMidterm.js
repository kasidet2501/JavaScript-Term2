
//NumberSplit

// function numberSplit(num){
//     return [Math.floor(num/2),Math.round(num/2)];
// }

// let num = -9;
// console.log(numberSplit(num)); //[-5,-6]

////////////////////////////////////////////////////////

//HighesDigit

// function highesDigit(num){
//     let arr = num.toString().split('');
//     return(Math.max(...arr));
// }
// let num = 34589;
// console.log(highesDigit(num)); //9

////////////////////////////////////////////////////////

//Move Capital

// function capToFront(str){
//     let front = "";
//     let back = "";
//     let arr = Array.from(str);

//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] == arr[i].toUpperCase()) front += arr[i];
//         else back += arr[i];
//     }
//     return front.concat(back);
// }

// let str = "hApPy"
// console.log(capToFront(str)); //APhpy

//////////////////////////////////////////////////////////

//Total Volume of All Boxes

// function totalVolume(...arr){
//     // console.log(arr); //[[2,2,2],[2,1,1]] จะได้เป็น Array
//     let sum = 0;
//     for(let i = 0 ; i < arr.length ; i++){
//         sum += arr[i].reduce((acc, cur) => acc * cur); //ใช้เป็น + หรือ * ก็ได้
//     }
//     return sum;
// }

// console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1])); //63  ต้องเอาเลขในอาเรย์มาคูณกัน แล้วบวกทุกอันเข้าด้วยกัน

//////////////////////////////////////////////////////////

//Get Sum of People' Budget

// function getBudget(info){

//     // console.log(info.map(obj => obj.budget).reduce((acc, cur) => acc + cur)); // ใช้แบบไหนก็ได้

//     return info.map(obj => Object.values(obj)[2]).reduce((acc, cur) => acc + cur);
// }

// let info = [
//     {name: 'John',  age: 21, budget: 23000},
//      {name: 'Steve',  age: 32, budget: 40000},
//       {name: 'Martin',  age: 16, budget: 2700}
//     ];
// console.log(getBudget(info));

// console.log(ob[0].budget);

//////////////////////////////////////////////////////////

//Remove Duplicates from array

// function removeDups(arr){
//     let newarr = [];
//     for(let i = 0 ; i < arr.length ; i++){
//         let value = arr[i];
//         if(newarr.indexOf(value) == -1) newarr.push(value);
//     }
//     return newarr;
// }
// let arr = ["The","big","The"];
// console.log(removeDups(arr)); //[ 'The', 'big' ]

//////////////////////////////////////////////////////////

//Return the Sum of the Two Smallest Numbers

// function sumTwoSmallestNums(arr){
//     arr = arr.filter(num => num >= 0); //กรองไม่เอาเลขติดลบ
//     let min1 = Math.min(...arr);

//     arr = arr.filter(num => num != min1); //กรองไม่เอาเลข min1
//     let min2 = Math.min(...arr);

//     return min1 + min2;

// }
// let arr = [2,9,6,-1];
// console.log(sumTwoSmallestNums(arr));

//////////////////////////////////////////////////////////

//Simple Pair

// function simplePair(arr,res){
//     // let newarr = [];
//     // for(let i = 0 ; i < arr.length ; i++){
//     //     if(arr[i]*arr[i+1] == res) newarr.push(arr[i],arr[i+1]);
//     //     if(arr[i]*arr[i+2] == res) newarr.push(arr[i],arr[i+2]);
//     // }
//     // return newarr;

//     let newarr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let n = i + 1; n < arr.length; n++) {
//           let a = arr[i];
//           let b = arr[n];
//           if (a*b === res) newarr.push(a,b);
//         }
//     }
//     return newarr;
// }
// let arr = [1,2,3];
// console.log(simplePair(arr,3)); //[1,3] 

//////////////////////////////////////////////////////////

//Time Conversion

// function digitalClock(time){
//     let hour = Math.floor(time / 3600);
//     let min = Math.floor((time - (hour * 3600)) / 60);
//     let sec = time - ((hour * 3600)+(min * 60));
    
//     if(hour >= 24) hour %= 24;
//     if(hour <= 9) hour = "0"+hour;
//     if(min <= 9) min = "0"+min;
//     if(sec <= 9) sec = "0"+sec;

//     return (hour+":"+min+":"+sec);
// }
// let time = "864002";
// console.log(digitalClock(time)); //00:00:02

//////////////////////////////////////////////////////////

//IPv4 validation

// function isValidIP(str){

//     str = str.split( "." );
//     if(str.length != 4) return false;
//     for(let i = 0 ; i < str.length ; i++){
//         let check = str[i];
//                                      //เช็คตำแหน่งแรกของ array นั้นๆว่าเป็น 0 หรือไม่
//         if(parseInt(str[i]) > 255 || check[0] == "0") return false;
        
//     }
//     return true;
    
// }
// console.log(isValidIP("1.2.3.4"));
// console.log(isValidIP("1.2.3"));
// console.log(isValidIP("1.2.3.4.5")) ;
// console.log(isValidIP("123.45.67.89")) ;
// console.log(isValidIP("123.456.78.90")) ;
// console.log(isValidIP("123.045.067.089"));