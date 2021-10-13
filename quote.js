const url = 'https://type.fit/api/quotes';  //Quotes API


window.onload = getQuote;
async function getQuote() {

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json();
        // console.log(json);
        function randomQuote() {
            let quote = json[Math.floor(Math.random() * json.length)];
            quotation.innerHTML = `<h1>“</h1><p>“${quote.text}”</p>`;
            source.innerHTML = `<h3>-- ${quote.author} </h3>`;
        }
        randomQuote();
    } catch (err) {
        // console.log(err)
        // alert('Failed to fetch new quote');
    }
}
