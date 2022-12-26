

// does the same as
// for (let char of str) console. log(char);


for (let char of "test") {
    // triggers 4 times: once for each character
    console.log( char ); // t, then e, then s, then t
}