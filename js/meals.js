// console.log('mealsss')

const fishDataLoad = (searchField) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchField}`)
                .then(res => res.json())
                .then(data => displayData(data.meals))
};

const displayData = meals => {
        // console.log(meals.meals[0].idMeal)
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerText = '';
        meals.forEach(meal => {
                console.log(meal)
                const mealsDiv = document.createElement('div');
                mealsDiv.classList.add('col')
                mealsDiv.innerHTML = `
                
                
                <div class="col">
                <div class="card h-100">
                  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">ablespoons of oil Add, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn Then add onion, bell peppers, thyme,</p>
                  </div>
                </div>
              </div>
              <button onclick= "mealDetails2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                 Details
</button>
                
                `
                cardContainer.appendChild(mealsDiv)
        })
}
// const mealDetails = idMeal => {
//         const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
//         fetch(url)
//                 .then(res => res.json())
//                 .then(data => showDetails(data.meals[0]))
//                 .catch(error => {
//                         console.log(error)
//                 })

// }
const mealDetails2 = async (idMeal) => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        try {
                const res = await fetch(url);
                const data = await res.json();
                showDetails(data.meals[0])
        }catch(error){
                console.log(error);

        }

}


const showDetails = meal => {
        document.getElementById('exampleModalLabel').innerText = meal.strMeal;
        document.getElementById('modal-pic').innerHTML = `<img class = "img-fluid" src = "${meal.strMealThumb}"> `
}

const searchMeal = search => {
        const searchField = document.getElementById('search-field').value;
        // console.log(searchField)
        fishDataLoad(searchField)
}


fishDataLoad('fish')