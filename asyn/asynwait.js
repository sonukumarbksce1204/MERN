async function greet(){
    console.log("Hellow world");
    return "Adfar"
}
var a=greet()

a.then((result)=>{
    console.log(result);
})
// console.log(a);

async function add(){
    // a.then((result)=>{
    //     console.log(result);
    // })
    let data =await a 
    console.log(data);
}


var data=fetch("https://official-joke-api.appspot.com/random_joke")
//console.log(data)
data.then((result)=>{
    return result.json();
}).then((response)=>{
    console.log(response);
})

async function generateJoke(){
const response= await fetch("https://official-joke-api.appspot.com/random_joke")
const joson=
}
