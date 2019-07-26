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
                currencies.forEach((currency, ind) => {
                    if (ind < 100) {
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

    printMessage(message, className) {
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const messagesDiv = document.querySelector('.messages')
        messagesDiv.appendChild(div);

        // Remove after 3 secs
        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 3000)
    }

    // NEED TO MODIFY FROM API
    displayResult(data) {
        console.log(data);

        this.showSpinner();

        const prevResult = document.querySelector('#result > div');
        if(prevResult) {
            prevResult.remove();
        }
        let HTMLTemplate = "";

        HTMLTemplate += `
       <div class ="card blue darken-3">
        <div class = "card-content white-text">
            <span class = "card-title">Result</span>
            <p>The Price of 1 ${data.base} is ${data.target} ${Math.round(data.price)} </p>
            <p>Past hour price change ${(data.change)}% </p>
            <p>Total trade volume for the last 24 hours is ${Math.round(data.volume)}</p>
        </div>
       </div>
       `

        setTimeout(() => {
            // Displaying the result
            const divResult = document.querySelector('#result');
            divResult.innerHTML = HTMLTemplate;
            // Hide the spinner
            document.querySelector('.spinner img').remove();
        }, 3000)
    }

    showSpinner() {
        const spinnerGIF = document.createElement('img');
        spinnerGIF.src = './img/spinner.gif'
        document.querySelector('.spinner').appendChild(spinnerGIF);
    }
}