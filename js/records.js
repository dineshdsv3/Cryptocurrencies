console.log("search records");
displayResults();

function displayResults() {
    fetch('/displayresults')
    .then((response) => {return response.json()})
    .then((data) => {
        const ul = document.getElementById('records');
        let htmlContent = '';
        data.forEach((values) => {
            htmlContent += `<ul>
            <li>Currency ${values.currency}</li>
            <li>Crypto ${values.crypto}</li>
            <li>Trade value at the time of search ${values.trade}</li>
            </ul>`
        })
        ul.innerHTML = htmlContent;
    });
}