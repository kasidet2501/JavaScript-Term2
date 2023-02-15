function findalphabet(str){
    var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
    str = str.split('');
    let low = [];
    let miss = "";
    for(let i = 0 ; i < str.length ; i++){
        let strr = str[i].toLowerCase();
        low.push(strr);
    }
    for(let i = 0 ; i < alpha.length ; i++){
        let st = alpha[i];
        if(low.includes(st) == false){
            miss += st + ',';
        }
    }
    if(miss == ""){
        return "Has no missing alphabet letter";
    }
    else{
        return "Missing alphabet letter = " + miss;
    }
}
const str1 = "The quick brown fox jumps over the lazy dog";
const str2 = "The quick brown fox Jumps oveR the dog";
const str3 = "I love Pixar animation studio";
console.log(str1 + " " + findalphabet(str1));
console.log(str2 + " " + findalphabet(str2));
console.log(str3 + " " + findalphabet(str3));
