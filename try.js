var data = fetch("https://stock.indianapi.in/stock?name=Tata+steel", {
    method: "GET",
    headers: {
        "x-api-key": "sk-live-9BKwbGsg6d9HI1IafhI0o2dBzu1lU4aRfzPbaYAu"
    }
});
data.then((result) => {
    return result.json();
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.error("Error:", error);
});
