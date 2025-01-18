var a=0;
if(a){
    console.log("Condition is true")
}else if(a==10){
    console.log("Equal to 10");
}else{
    console.log("Condition is false")
}

var a=10;
switch(a){
    case 10:
        console.log("Condition is 10")
        break;
    case 20:
        console.log("Condition is 20")
        break;
    case 30:
        console.log("Condition is 30")
        break;
    default:
        console.log("Not in condition");
        break;
}

var a=10;

console.log(a!==10?"Condition is 10":"Not 10");

var a=10,b=20,c=20;
console.log((a>b&&a>c)?a:((b>a&&b>c)?b:c));