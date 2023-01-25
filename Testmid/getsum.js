function getsum(value){

    console.log(value.map(obj => Object.values(obj)[2]));

    return value.map(obj => Object.values(obj)[2]).reduce((acc, curr) => acc + curr);

}

let value = [
    {name: 'John',  age: 21, budget: 23000},
     {name: 'Steve',  age: 32, budget: 40000},
      {name: 'Martin',  age: 16, budget: 2700}
    ];
console.log(getsum(value));