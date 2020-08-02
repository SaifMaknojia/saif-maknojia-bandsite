let container = document.querySelector('.container');


function api(){
    axios.get('https://project-1-api.herokuapp.com/showdates?api_key=6d56a3c2-926f-4c4e-abd8-22e69d538d17')
    .then(function(res){
    for (var i = 0 ; i < res.data.length; i++){
        console.log(res)
        apiInfo(res, i)
  
    }
    }).catch(function(e){
        console.log('there is an error in api')
    })
}
api()

function apiInfo(res, i){
    // Date section
let divContainer =  document.createElement('div')
divContainer.classList.add('container__details');
container.appendChild(divContainer)

let div1 = document.createElement('div')
div1.classList.add('container__dateholder');

let date = document.createElement('h3');
date.innerText = "Date"
date.classList.add('container__dateholder--date');

let exactDate = document.createElement('p');
exactDate.innerText = res.data[i].date;
exactDate.classList.add('container__dateholder--exact-date');

divContainer.appendChild(div1)
div1.appendChild(date)
div1.appendChild(exactDate)


// venue section
let div2 = document.createElement('div')
div2.classList.add('container__venueholder');

let venue = document.createElement('h3');
venue.innerText = "VENUE"
venue.classList.add('container__venueholder--venue');

let exactVenue = document.createElement('p');
exactVenue.innerText = res.data[i].location;
exactVenue.classList.add('container__venueholder--exact-venue');

divContainer.appendChild(div2)
div2.appendChild(venue)
div2.appendChild(exactVenue)

/* location */
let div3 = document.createElement('div')
div3.classList.add('container__locationholder');

let location = document.createElement('h3');
location.innerText = "LOCATION"
location.classList.add('container__locationholder--location');

let exactLocation = document.createElement('p');
exactLocation.innerText = res.data[i].place;
exactLocation.classList.add('container__locationholder--exact-location');

divContainer.appendChild(div3)
div3.appendChild(location)
div3.appendChild(exactLocation)


// // Button
let div4 = document.createElement('div');
div4.classList.add('container__buttonholder')

let button = document.createElement('button')
button.innerHTML ="BUY TICKETS"
button.classList.add('container__buttonholder--button')


divContainer.appendChild(div4);
div4.appendChild(button);


}