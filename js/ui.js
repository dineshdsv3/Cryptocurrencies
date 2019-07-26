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
            let currencies = data.data;
            console.log(currencies);
                currencies.forEach((currency,ind) => {
                    if(ind<10){
                    const select = document.getElementById('cryptocurrency');
                    const option = document.createElement('option');
                    option.value = currency.symbol;
                    option.appendChild(document.createTextNode(currency.name));
                    select.append(option);    
                    }
                    
                })
                console.log("adding crypto done");
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
    displayResult(price, currency,crypt) {
        let currencyName;
        currencyName = 'price' + currency.toLowerCase();
       console.log(price,currency);
       
       this.showSpinner();
       let HTMLTemplate = "";

       HTMLTemplate += `
       <div class ="card blue darken-3">
       <div class = "card-content white-text">
       <span class = "card-title">Result</span>
       <p> The Price of 1 ${crypt} is ${currency} ${Math.round(price)} </p>
       </div>
       </div>
       `
       
        setTimeout(() => {
            // Displaying the result
            const divResult = document.querySelector('#result');
       divResult.innerHTML = HTMLTemplate;
            // Hide the spinner
            document.querySelector('.spinner img').remove();
        },3000)
    }

    showSpinner() {
        const spinnerGIF = document.createElement('img');
        spinnerGIF.src = './img/spinner.gif'
        document.querySelector('.spinner').appendChild(spinnerGIF);
    }
}