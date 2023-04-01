//if else
var num1=10
var num2=20
if(num1>num2){
    console.log("1st num is bigger")
}
else{
    console.log("2nd num is bigger")
}

//if

var a=1;
if(a>0){
    console.log("positive");
}
if(a<0){
    console.log("negative");
}
if(a>=0){
    console.log("it real number");
}
//Nested if else
var a=1;
if(a>=0){
    if(a>0){
        console.log("+ve");
    }
    else{
        console.log("zero");
    }
}
else{
    console.log("-ve");
}

//switch

var num1=20;
var num2=30;
switch(num1>num2){
    case true:
        console.log("this is first case");
        break;

     case false:
        console.log("this is second case");
        break;
     
    default:
        console.log("nothing");

    }

//logical operator

var a=1;

if(!a){
    console.log("a is +ve");
}
else{
    console.log("nothing");
}

//ternary operator
const mymarks=50;
mymarks>30 ? console.log("passed"):console.log("fail");

//increment operator

var a=2;
var b=2;
var c=2;{

b=a--;
c=--a;

console.log({a,b,c});
}

//loops

//for loop
for(var num=0;num<=100;num++){
    if(num%5===0)
    console.log(num);
}

//while loop
var num=0;
while(num<=100){
    if(num%5===0){
        console.log(num);
    }
    num++;
}

//do while
var num=0;
do{
    if(num%5===0){
        console.log(num);
    }
    num++;
}
    while (num<=100); 
