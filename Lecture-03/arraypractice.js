console.log("\n******* compare the 3 arrays array and find any common elements *******\n");

let values1= ['Apple', 1, false];
let values2 = ['Fries', 2 ,true];
let values3 = ['Mars', 9, 'Apple'];



let value = [];

for (let i = 0; i < values1.length; i++) {
  if(values2.includes(values1[i]) && values3.includes(values1[i])) {
    value.push(values1[i]);
  }
}

console.log(value);


console.log("\n******* For each item in this array console.log the letters in each item *******\n");

let furniture = ['Table', 'Chairs', 'Couch'];


console.log("==== Use for of ====\n");
for(let i = 0 ; i < furniture.length ; i++){

    for(let char of furniture[i]){
        console.log(char);
    }
    console.log("\n");
}



console.log("==== Use for each ====\n");
furniture.forEach(function(letter) {
  for (let i = 0; i < letter.length; i++) {
    console.log(letter[i]);
  }
  console.log("\n");
});


