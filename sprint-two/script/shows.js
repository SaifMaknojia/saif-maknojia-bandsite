let container = document.querySelector('.container');






// ARRAYS

let details = [
    {
        date: 'DATE',
        exactDate: 'Mon Dec 17 2018',
        venue: 'VENUE',
        exactVenue: 'Ronald Lane',
        location: 'Location',
        exactLocation: 'San Fancisco, CA'
    },
    {
        date: 'DATE',
        exactDate: 'Tue Jul 18 2019',
        venue: 'VENUE',
        exactVenue: 'Pier 3 East',
        location: 'Location',
        exactLocation: 'San Fancisco, CA'
    },
    {
        date: 'DATE',
        exactDate: 'Fri Jul 22 2019',
        venue: 'VENUE',
        exactVenue: 'View Loungue',
        location: 'Location',
        exactLocation: 'San Fancisco, CA'
    },
    {
        date: 'DATE',
        exactDate: 'Sat Aug 12 2019',
        venue: 'VENUE',
        exactVenue: 'Hyatt Agency',
        location: 'Location',
        exactLocation: 'San Fancisco, CA'
    },
    {
        date: 'DATE',
        exactDate: 'Fri Sep 05 2019',
        venue: 'VENUE',
        exactVenue: 'Moscow Center',
        location: 'Location',
        exactLocation: 'San Fancisco, CA'
    },
    {
        date: 'DATE',
        exactDate: 'Wed Aug 11 2019',
        venue: 'VENUE',
        exactVenue: 'Pres Club',
        location: 'Location',
        exactLocation: 'San Fancisco, CA'
    }
]

for (var i = 0; i < details.length; i++){
    let mainContainer = document.createElement('div');
    mainContainer.classList.add('details__container');

    // let holder = document.createElement('div');
    // holder.classList.add('venue__container');

    //creating div for dates, venue, location and button
    //1.dateholder.
    let dateHolder = document.createElement('div');
    dateHolder.classList.add('date__container')

    //2. VenueHolder
    let venueHolder = document.createElement('div');
    venueHolder.classList.add('venue__container');

    //3. locationHolder
    let locationHolder = document.createElement('div');
    locationHolder.classList.add('location__container')

    //4. buttonHolder
    let button = document.createElement('div');
    button.classList.add('button__container')

    //1st div
    let date = document.createElement('h3');
    date.innerText = details[i].date;
    date.classList.add('venue__date');

    let exactDate = document.createElement('h4');
    exactDate.innerText = details[i].exactDate;
    exactDate.classList.add('venue__exact-date');

    // 2nd div
    let venue = document.createElement('h3')
    venue.innerText = details[i].venue;
    venue.classList.add('location__venue');

    let exactVenue = document.createElement('h4');
    exactVenue.innerText = details[i].exactVenue;
    exactVenue.classList.add('location__exact-venue');

    //3rd div
    let location = document.createElement('h3')
    location.innerText = details[i].venue;
    location.classList.add('location__location');

    let exactLocation = document.createElement('h4');
    exactLocation.innerText = details[i].exactVenue;
    exactLocation.classList.add('location__exact-location');

    //4th div
    let buttonInput = document.createElement('button');
    buttonInput.innerHTML = 'Buy Ticket';
    buttonInput.classList.add('button');
    //wrap it inside date div.
    dateHolder.appendChild(date);
    dateHolder.appendChild(exactDate);

    //wrap it inside venue div
    venueHolder.appendChild(venue);
    venueHolder.appendChild(exactVenue);

    //wrapping it inside location div
    locationHolder.appendChild(location);
    locationHolder.appendChild(exactLocation);

    //wrapping it inside location div
    button.appendChild(buttonInput);


    // holder.appendChild(dateHolder);
    container.appendChild(mainContainer);
    mainContainer.appendChild(dateHolder);
    mainContainer.appendChild(venueHolder);
    mainContainer.appendChild(locationHolder);
    mainContainer.appendChild(button)
}