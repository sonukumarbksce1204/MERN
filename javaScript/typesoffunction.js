// greet()
// function greet(){   //first order function
//     console.log("GoodMorning")
// }
// greet()

// add()
// var add=function add(){
//     console.log(5+5)
// }
// add()



//callback function

function add(){  //this is callback function
    console.log(5+5)
}

function greet(x,y){  //higer order bunction function 
    x()
    console.log(y)
}

greet(add,"sonu")

//anynoomous function

greet(function(){//call back function
    console.log("gooood morning")
},"Sonu");

//imeditely invoke function
(function(){
    console.log("Hellow")
})();

(function(x,y){
    console.log(x+y)
})(5,6);


//fat arrow function

function add(){
    return 3+4
}

var sum=function(){
    return 4+5
}

//fat arrow function
var addition=()=>{
    return 5+5
}

console.log(addition())

//fat arrow with only one return funtion
var add=x=>x+6
console.log(add(5))
//nan is not a number

var add=(x,y)=>x+y
console.log(add(5,6))