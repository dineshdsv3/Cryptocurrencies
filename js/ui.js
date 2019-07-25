class UI {
    constructor() {
        this.init()
    }
    init() {
        this.printCryptoCurrencies();
    }
    printCryptoCurrencies() {
       cryptoAPI.getCryptoCurrenciesList()
        .then((data) => {
            let currencies = data.contextWrites.to.ico.finished;
            // console.log(currencies);
                currencies.forEach((currency,ind) => {
                    if(ind<10){
                    const select = document.getElementById('cryptocurrency');
                    const option = document.createElement('option');
                    option.value = currency.name;
                    option.appendChild(document.createTextNode(currency.coin_symbol));
                    select.append(option);    
                    }
                    
                })
            });
    }

    printMessage(message,className) {
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const messagesDiv = document.querySelector('.messages')
        messagesDiv.appendChild(div);

        // Remove after 3 secs
        setTimeout(() => {
            document.querySelector('.messages div').remove();
        },3000)
    }

    // NEED TO MODIFY FROM API
    displayResult(result, currency) {
        let currencyName;
        currencyName = 'price' + currency.toLowerCase();
        const Value = result[currencyName];

        this.showSpinner();
    }

    showSpinner() {
        const spinnerGIF = doc.createElement('img');
        spinnerGIF.src = './img/spinner.gif'
        document.querySelector('.spinner').appendChild(spinnerGIF);
    }
}