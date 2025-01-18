var person={
    fname:"Sonu",
    lname:"Kumar",
    age:20,
    address:{
        pincode:123456,
        street:"Street 1"
    },
    skills:["Html","css","js"]
}

console.log(person)
console.log(person.fname)
console.log(person["fname"])
console.log(person.address.pincode)

var obj={
    name:"John",
    age:30,
    city:"New York"
}

var x=Object.keys(obj) //return array of keys
console.log(x)

var y=Object.values(obj) 
console.log(y);

var z=Object.entries(obj)
console.log(z)

var obj={
    name:"John",
    age:30,
    city:"New York"
}
var obj2={
    address:"LPU",
    pincode:123456
}

Object.assign(obj,obj2)
console.log(obj)

Object.assign(obj,obj2,{gender:"male"})
console.log(obj)

var x={...obj,...obj2}
console.log(x)

var obj={
    name:"John",
    age:30,
    city:"New York"
}

Object.freeze(obj) //this will make object immutable
obj.gender="male";
console.log(obj);
obj.name="Sonu";
console.log(obj);

Object.seal(obj) //this allow upation but not addtion of key
obj.gender="male";
console.log(obj);
obj.name="Sonu";
console.log(obj);




