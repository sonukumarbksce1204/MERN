var promise=new Promise((resolve,reject)=>{
    var name="Adfar"
    if(name==="Adafar"){
        resolve(name)
    }else{
        reject("error")
    }
})


promise.then((res)=>{
    // console.log("Promise resolved");
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


// promise.then((res)=>{
//     // console.log("Promise resolved");
//     console.log(res);
// },(err)=>{
//     console.log(err)
// })