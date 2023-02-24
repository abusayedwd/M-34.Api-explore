// console.log('countriessss')

const countryData = () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => countryDisplay(data))
}
const countryDisplay = countries => {
        const countryContainer = document.getElementById('all-countries')
        // console.log(countries[0].name)
        countries.forEach(country => {
                const div = document.createElement('div');
                div.classList.add('country');
                div.innerHTML = `
                
                <h2>name: ${country.name.common} </h2>
                <h4>capital: ${country.capital ? country.capital[0] : 'no county'} </h4>
                <button onclick="countryDetails('${country.cca2}')">country details</button>
                `
                countryContainer.appendChild(div)

                // console.log(country.name.official)

        })
}
const countryDetails = code => {
        const url = `https://restcountries.com/v3.1/alpha/${code}`
        // console.log( url)
        fetch(url)
        .then(res => res.json())
        .then(data => showCountryName(data[0]))
}

const showCountryName = country => {
        console.log(country)
        const countryName = document.getElementById('country-name');
        countryName.innerHTML = `
        
    <h3>name : ${country.name.common}</h3>   
    <img src = "${country.flags.png}"> 
    `
}
countryData()