console.log(this); //here it points to golobal object

function greet(){
    console.log("Hello")
    console.log(this)
}

greet()

var obj={
    name:"Adfar",
    age:28,
    sayname:function(){
        //return "my name is ",obj.name+"My age is "+obj.age
        return "my name is ",this.name+"My age is "+this.age
    }
}

var x=obj.sayname()
console.log(x);