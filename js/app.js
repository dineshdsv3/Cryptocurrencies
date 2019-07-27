// Instantiating the classes

const cryptoAPI = new CryptoAPI();
const ui = new UI();

const form = document.getElementById('form');

document.getElementById('showRecords').addEventListener('click', showrecords);

function showrecords() {
    window.location.pathname = "./SearchRecords.html";
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const currency = document.getElementById('currency').value;
    const crypto = document.getElementById('cryptocurrency').value;

    if (currency === '' || crypto === '') {
        ui.printMessage('All the fields are mandatory', 'deep-orange darken-4 card-panel');

    } else {
        cryptoAPI.queryAPI(currency, crypto)
            .then(async (data) => {
                console.log(data.ticker)
                await fetch('/searchRecords', {
                    method: "POST", 
                    headers: {
                        // Specifying the content type
                        'Content-Type' : 'application/json'
                        // here we are sending json data that's the reason we are specifiying above line
                    },
                    body: JSON.stringify({
                        currency: data.ticker.target,
                        crypto: data.ticker.base,
                        trade: data.ticker.volume
                    })

                })
                ui.displayResult(data.ticker);
            })
    }

})



// 1BTC = 9732USD