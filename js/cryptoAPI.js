class CryptoAPI {


    // getting all crypto currencies
    async getCryptoCurrenciesList() {
        console.log("getting crypto currency list");
        const url = await fetch('https://ICOWatchListraygorodskijV1.p.rapidapi.com/getAllICOs', {
            method: 'POST',

            headers: {
                "X-RapidAPI-Host": "ICOWatchListraygorodskijV1.p.rapidapi.com",
                "X-RapidAPI-Key": "78603c6232msh790b6744a87d853p194cf9jsnc4ba1744f8b8",
                "Content-Type": "application/x-www-form-urlencoded"
            },
        })
        // Return as JSON
        const cryptocurrencies = await url.json();
        // return the object
        return  cryptocurrencies ;


    }
}

// fetch('https://ICOWatchListraygorodskijV1.p.rapidapi.com/getAllICOs', {
//     method: 'POST',

//     headers: {
//         "X-RapidAPI-Host": "ICOWatchListraygorodskijV1.p.rapidapi.com",
//         "X-RapidAPI-Key": "78603c6232msh790b6744a87d853p194cf9jsnc4ba1744f8b8",
//         "Content-Type": "application/x-www-form-urlencoded"
//     },

// })
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log("its ");
//         console.log(data.contextWrites.to.ico.finished);
//     });