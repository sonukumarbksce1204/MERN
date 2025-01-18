//let arr=[5,6,7,8,9]
function add(x,y,z,a,b){
    return x+y+z+a+b;
}
var x=add(...arr)//mean spread the value inside the array
console.log(x);

//rest operatior
function add(...other){//here it will pack the values
    return other.reduce((total,item)=>total+=item)
}
var x=add(2,3,4,53,3,23,234,23,2,3)
console.log(x);


var arr1=[1,2,3]
var arr2=[4,5,6]
var arr3=[7,8,9]
var arr3=[...arr1,...arr2,...arr3]
console.log(arr4);

//destructring
var [a,b]=[1,2,3,4,5]
console.log(a,b);


var arr=["a","d","f","a","r"]
var str=arr.join()
console.log(str)
var arr1=str.split(",")
console.log(arr1)
var x=arr1.reverse()
var y=x.join("")
console.log(Y);

//forEach it return undefine

var arr=[12,2,3,3,3,2];
Array.forEach(element=>{
    console.log(element*2);
});

var arr=[3,4,5,23,2,3,23]
for(let x of arr){
    console.log(x)
}