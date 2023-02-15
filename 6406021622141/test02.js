function change(str){
    let new1 = "";
    let new2 = "";
    let new3 = "";
    str = str.split("");
    for(let i = 0 ; i < str.length ; i++){
        str[i] = str[i].toLowerCase();
        if(str[i] == " "){
            str[i] = "_";
            new1 += str[i].toString();
        }
        else{
            new1 += str[i].toString();
        }
    }
    for(let i = 0 ; i < str.length ; i++){
        str[i] = str[i].toLowerCase();
        if(str[i] == "_"){
            str[i] = "-";
            new2 += str[i].toString();
        }
        else{
            new2 += str[i].toString();
        }
    }
    for(let i = 0 ; i < str.length ; i++){
        str[i] = str[i].toLowerCase();
        if(str[i] == "-"){
            str[i] = "";
            new3 += str[i].toString();
        }
        else{
            new3 += str[i].toString();
        }
    }
    return new1 + "," + new2 + "," + new3;
}
const str1 = "Hello World";
const str2 = "Five Years value";
const str3 = "Total Price Plus Tax";
console.log(str1 + " => " +change(str1));
console.log(str2 + " => " +change(str2));
console.log(str3 + " => " +change(str3));