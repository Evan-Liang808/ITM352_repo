//declare variable
let age=20;
let fav_num=65;
let day_of_birth=11;
let month_of_birth=8;

//declare claculations
let calc1 = age + fav_num / day_of_birth * month_of_birth;

let calc2 = (age + fav_num) / day_of_birth * month_of_birth;

//result of expression outputs
document.getElementById("result1").innerHTML = calc1;

document.getElementById("result2").innerHTML = calc2;

