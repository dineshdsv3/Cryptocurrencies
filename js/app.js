// Instantiating the classes

const cryptoAPI = new CryptoAPI();
const ui = new UI();

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const currency = document.getElementById('currency').value;
    const crypto = document.getElementById('cryptocurrency').value;

    if(currency === '' || crypto === '') {
        ui.printMessage('All the fields are mandatory','deep-orange darken-4 card-panel');
        
    }else{
       cryptoAPI.queryAPI(currency,crypto)
       .then((data) => {
          console.log(data.ticker)
          let price = data.ticker.price;
          let crypt = data.ticker.base;
          ui.displayResult(price,currency,crypt);
       })
    }
})



// 1BTC = 9732USD