

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

// const quoteLoad = () => {
//         fetch('https://api.kanye.rest/')
//                 .then(res => res.json())
//                 .then(data => displayQuote(data))
// }

const quoteLoad2 = async () => {
        try {
                const res = await fetch('https://api.kanye.rest/')
                const data = await res.json()
                displayQuote(data)
        }
        catch (error) {
                console.log(error)
        }
}

const displayQuote = quote => {
        // console.log(quote)
        const blockQuote = document.getElementById('quote-block')
        blockQuote.innerHTML = quote.quote;
}

quoteLoad2()