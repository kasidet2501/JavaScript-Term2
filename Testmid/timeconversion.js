function timeconversion(time){
    let hour = Math.floor(time / 3600);
    let min = Math.floor((time - (hour*3600)) / 60);
    let sec = time - ((hour*3600)+(min*60));

    if(hour >= 24) hour = (hour%24);
    if(hour <= 9) hour = "0"+hour;
    if(min <= 9) min = "0"+min;
    if(sec <= 9) sec = "0"+sec;

    return (hour+":"+min+":"+sec);

}

let time = "87060";
console.log(timeconversion(time));