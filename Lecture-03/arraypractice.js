//Array Practice

let values1= ['Apple', 1, false];
let values2 = ['Fries', 2 ,true];
let values3 = ['Mars', 9, 'Apple'];

let v1 = [];
let v2 = [];
let v3 = [];

for (let i = 0; i < values1.length; i++) {
  if(values2.includes(values1[i]) || values3.includes(values1[i])) { // includes คือการเช็คว่ามีข้อมูล valus1[i] อยู่ใน values2 ไหม
    v1.push(values1[i]);
  }
  if(values1.includes(values2[i]) || values3.includes(values2[i])){
    v2.push(values2[i]);
  }
  if(values1.includes(values3[i]) || values2.includes(values3[i])){
    v3.push(values3[i]);
  }

}
console.log("==== Print commen element each item ====\n");
console.log("values 1 " + v1);
console.log("values 2 " + v2);
console.log("values 3 " + v3);
console.log("\n");


// console.log("\n******* For each item in this array console.log the letters in each item *******\n");

let furniture = ['Table', 'Chairs', 'Couch'];


console.log("==== Use for of ====\n");
for(let i = 0 ; i < furniture.length ; i++){

    for(let char of furniture[i]){
        console.log(char);
    }
    console.log("\n");
}



// console.log("==== Use for each ====\n");
// furniture.forEach(function(letter) {

//   for (let i = 0; i < letter.length; i++) {
//     console.log(letter[i]);
//   }
//   console.log("\n");
// });


