// console.log('random')

const loadUser = () => {
        fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data =>  displayUser(data))
}

const displayUser = user => {
        console.log(user.results[0].picture)
document.getElementById('name').innerHTML = user.results[0].name.title+ ' '+ user.results[0].name.first+ ' ' +user.results[0].name.last;
// document.getElementById('name').innerHTML = user.results[0].name.last;
document.getElementById('gender').innerHTML = user.results[0].gender;
document.getElementById('photo').innerHTML =  `

<img src = "${user.results[0].picture.thumbnail}">
`;
}


loadUser()