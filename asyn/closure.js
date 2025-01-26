function outer(){
    let x=10;
    return function(){
        x++;
        console.log(x);
    }
}
let x=outer();
x();
x();