var obj={
    name:"adfar",
    age:28,
    city:"Dhaka",
    address:{
        street:"Dhamondi",
        house:"12/A"
    }
}

//shallow copy
var obj2=obj;
obj2.name="Rahul"; //here a referance has been created
console.log(obj);
console.log(obj2);

//deep copy
var obj2={...obj}; 
obj2.name="Rahul";
console.log(obj);
console.log(obj2);

var obj={
    name:"adfar",
    age:28,
    city:"Dhaka",
    address:{
        street:"Dhamondi",
        house:"12/A"
    }
}
const shallowCopy=Object.assign({},obj)
shallowCopy.name="Rahul"
console.log(shallowCopy)
console.log(obj);
//to solve deepcopy this issue we use json object

var obj={
    name:"Adfar",
    age:28,
    city:"Dhaka",
    address:{
        street:"Dhamondi",
        house:"12/A"
    }
}

console.log(JSON.stringify(obj));
var x=JSON.parse(JSON.stringify(obj));
console.log(x);
x.address.street="sdgsde";
console.log(x)
console.log(obj)


var obj={
    name:"Adfar",
    age:28,
    city:"Dhaka",
}

for(let key in obj){ //this is to irtate on inumerable object
    console.log(key,":",obj[key]);
}

Object.defineProperty(obj,"name",{
    //value:"Adfar",
    writable:true,
    enumerable:false
})

for(let key in obj){ 
    console.log(key,":",obj[key]);
}



