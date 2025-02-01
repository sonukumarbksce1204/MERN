import React from "react";

export default function Bitcoingen(){
    async function gen() {
        var data=await fetch("https://api.coinlore.net/api/tickers/")
        var result=await data.json()
        var di=result.data
        return (
            <div>
                di.map((item,index)=>
                <h1></h1>
                )
            </div>
        )
        
    }
    return (
        <div>
            <button onClick={gen}>Generate Bitcoin</button>
        </div>
    )
}