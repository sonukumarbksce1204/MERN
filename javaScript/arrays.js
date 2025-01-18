var arr=[3,4,5,6,7,8]
console.log(arr)
console.log(arr[0])

//multidimentional array
var arr1=[[1,2,3],
        [4,5,6],
        [7,8,9]]
console.log(arr1[2][1]);

var arr=[4,5,6]
//methods
arr.push("a","b") //add the element at the end and it return the udated length of array
var arr2=[3,4,5,6,7].push("sonu","kumar")
console.log(arr2)

var arr=[1,2,3,4,5,6]
var x=arr.pop() //it remove the element form the last index and retrun the deleded element
console.log(arr,x)

var arr=[1,2,3,4,5,6,7]
var x=arr.slice(2,5) //it return the sub array type will be array
var x1=arr.slice(2)
console.log(arr,x,x1)

var arr=[4,5,6,7,8,9]
var x=arr.shift() //remeove the element at first index
console.log(arr)

var arr=[2,3,4,5,6,7]
var x=arr.unshift("a","b") //insert the element at the first and return the length
console.log(x)

//splic
var arr=[3,4,5,6,7,8]
arr.splice(2,3) //return the deleted element by deleting the element at particular index
console.log(arr,x)
arr.splice(4)
console.log(arr)
arr.splice(2,2,"a","b","c","d") //it will first remove two elemnt form the index 2 and later on it will
//add element 
arr.splice(2,0,"a","b","c")


//question to do squaring of the array and return another array
var arr=[2,3,4,6,8,10]
var arr1=[]
for(var i=0;i<arr.length;i++){
    arr1.push(arr[i]*arr[i])
}
console.log(arr,'\n',arr1)

//map will return a new array it return same length array
var arr=[2,3,4,5,6]
var arr2=arr.map(function(item, index){//if function not define undefine is return
    //console.log(item,index)
    return item*item
})
var arr3=arr.map((item)=>item*10)
console.log(arr2,arr3)

var arr4=arr.map((item)=>item>3)
console.log(arr4)

//filter is just like map but it will reduce the length of the array 
var arr=[4,5,6,7,8,9]
var x=arr.filter((item,index)=>{
    return item>5
})
console.log(x)

//reduce is used to reduce the element into single value
var arr=[4,5,6,7,8,9]
var arr2=arr.reduce((total,item)=>{
    return total+item
})
console.log(arr2)

var arr2=arr.reduce((total,item)=>{
    return total+item
},10) //here 10 is acting as a intitial value of total if not passed then it will be zero
console.log(arr2)

//sort is used to sort the array
var arr=[42,-200,100.5,1-4,3.21,20,8,9,3,1,53]
arr.sort()//if we don't pass argument will sort the element on the basis of first digit 
console.log(arr);

arr.sort((a,b)=>{
    return a-b //for ascending 
    //return b-a for descending 
})
console.log(arr);


//find
var arr=[1,2,3,4];
var x=arr.find((item,index)=>{
    return item===3
})
console.log(x)

var arr=[5,6,7,8,9,1]
var x=arr.findIndex((item,index)=>{ //return -1 if element not find
    return item>4
})
console.log(x); 

var arr=[34,2345,345,324,2,32]
var x=arr.some((item,index)=>{
    return item>200
}) //return boolen value

console.log(x);


//every

var arr=[1,2,3,45,5,6,4,53]
var c=arr.every((item,item)=>{//if every element satisfy contion then only return true
    return item>0
})
console.log(x);

var arr=[1,2,[3,4,5,["a","b","c"],[5,6],"adfar"]]
var arr2=arr.map(item=>console.log(item))
var arr1=arr.flat(2)//argument level to be flated
console.log(arr1);
var arr1=arr.flat(Infinity)
console.log(arr1);


//concate multaple array

var arr1=[1,2,3];
var arr2=[4,5,6];
var arr3=[7,8,9];
var arr4=arr1.concat(arr2,arr3)
console.log(arr4)