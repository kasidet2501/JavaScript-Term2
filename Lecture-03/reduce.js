const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
    console.log("ac " + accumulator + "  /// cu " + currentValue); // 10
    return accumulator + currentValue;
});

console.log(sum); // 10
