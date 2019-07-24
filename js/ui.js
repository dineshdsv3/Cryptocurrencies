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
            console.log(currencies);
                currencies.forEach((currency,ind) => {
                    if(ind<10){
                    const select = document.getElementById('cryptocurrency');
                    const option = document.createElement('option');
                    option.value = currency.name;
                    option.appendChild(document.createTextNode(currency.coin_symbol));
                    select.append(option);    
                    }
                    
                })
            })
            ;
    }
}