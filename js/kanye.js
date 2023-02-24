 
 
//  const quoteLoad = () => {
//        fetch('https://api.kanye.rest/') 
//      .then(res => res.json())
//      .then(data =>  displayData(data))
//         }

//     const displayData =   quote => {
//         const blockQuote = document.getElementById('quote-block');
//         blockQuote.innerHTML = quote.quote;
//     }

//  quoteLoad()

const quoteLoad = () => {
        fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = quote => {
        // console.log(quote)
        const blockQuote = document.getElementById('quote-block')
        blockQuote.innerHTML = quote.quote;
}

quoteLoad()