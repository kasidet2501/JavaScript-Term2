function check(pass){
    pass = pass.split("");
    let num = 0;
    let low = 0;
    let up = 0;
    let spec = 0;
    let str = "";let str1 = "";let str2 = "";let str3 = "";let str4 = "";let str5 = "";let str6 = "";let str7 = "";
    let len = pass.length;
    if(pass.length < 8) str1 = "The password must be at least 8 charecters long.";
    else{  
        for(let i = 0 ; i < pass.length ; i++){
            let code = pass[i]
            let codee = pass[0]
            let codeee = pass[len-1]
            let code1 = codee.charCodeAt(0);
            let code2 = code.charCodeAt(0);
            let code3 = codeee.charCodeAt(0);
            if(pass[i] == " ") str6 = "The password must not contain any spaces.";
            if( code2 < 48  ){
                spec += 1;
            }
            if(code1 < 48 || code3 < 48){
                str7 = "The password must not start or end with a special charecter.";
            }
            if(pass[i] == pass[i].toLowerCase() ){
                low += 1;
            }
            if(pass[i] == pass[i].toUpperCase() ){
                up += 1;
            }
            if(!isNaN(Number(pass[i]))){
                num += 1;
            }
            if(low == 0) str3 = "The password must contain at least one lowercase letter.";
            if(up == 0) str2 = "The password must contain at least one uppercase letter.";
            if(num == 0) str4 = "The password must contain at least one number.";
            if(spec == 0) str5 = "The password does not contain a special character.";
        }
        if(num >1 && low >1 && up >1 && spec > 1)   return "is valid.";
        return "is not valid." + str1+str2+str3+str5+str6+str7;
    }
    return "is valid";
}
const password1 = "1234567@Az8";
const password2 = "%1234567a";
const password3 = "1234567Aa";
console.log('password'+ ' ' + password1 + ' ' + check(password1));
console.log('password'+ ' ' + password2 + ' ' + check(password2));
console.log('password'+ ' ' + password3 + ' ' + check(password3));
