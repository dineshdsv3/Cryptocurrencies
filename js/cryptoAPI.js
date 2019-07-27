class CryptoAPI {


    // getting all crypto currencies
    // Updated the list of crypto currencies
    async getCryptoCurrenciesList() {
        console.log("getting crypto currency list");
        const url = await fetch('https://l4chsalter-alternative-me-crypto-v1.p.rapidapi.com/v2/listings/', {
           
            headers: {
                "X-RapidAPI-Host": "l4chsalter-alternative-me-crypto-v1.p.rapidapi.com",
                "X-RapidAPI-Key": "78603c6232msh790b6744a87d853p194cf9jsnc4ba1744f8b8"
            },
        })
        // Return as JSON
        const cryptocurrencies = await url.json();
        // return the object
        return  cryptocurrencies ;


    }

    async queryAPI(currency, crypto) {
        const result = await fetch(`https://api.cryptonator.com/api/full/${crypto}-${currency}`);

        const convert = await result.json();

        return convert;
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