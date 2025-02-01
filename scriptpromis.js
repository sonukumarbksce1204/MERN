// fetch("https://api.coinlore.net/api/tickers/")
//     .then((result) => result.json())
//     .then((response) => {
//         console.log(response.data);
//         // response.data.map((coin) => {
//         //     console.log(coin.name);
//         //     console.log(coin.price_usd);
//         // });
//     })
//     .catch((error) => console.error("Error fetching data:", error));

//alter way

async function bitcoinGen() {
    var data=await fetch("https://api.coinlore.net/api/tickers/")
    var result=await data.json()
    console.log(result)
    
}
bitcoinGen()
