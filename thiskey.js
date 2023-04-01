const ourobject = {
    Name:"This keyword",
    getThis(){
        console.log(this);

    }

};
ourobject.getThis();

//array
var myArray=[1,2,3,4,5,6]
console.log(myArray);
myArray.push(7);
console.log(myArray);
myArray.shift();
console.log(myArray);

//recoursive function
var num=1;
function printNum() {
    console.log(num);
    num++;

    if(num<=10){
        printNum();
    }
    else{
        console.log("Hello");
        return;
    }
    
}
printNum();
