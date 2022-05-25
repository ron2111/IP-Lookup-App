



const mainPage = document.querySelector('.main-container')


const ipDisplay = document.querySelector('.ip-display')  
const locationDisplay = document.querySelector('.location-display')
const geoDisplay = document.querySelector('.geolocation-display')

const btn = document.querySelector('.lookup-btn');

btn.onclick = function (event) {
    btn.style.display = 'none'
    fetch('https://ipapi.co/json').then(response => response.json())
	.then((response) => {
    ipDisplay.textContent= `IP Address: ${response.ip}`
    locationDisplay.textContent= `Location: ${response.city}, ${response.region}, ${response.country_name}`
    geoDisplay.textContent= `Geo location: ${response.latitude}°N, ${response.longitude}°E`

    }).catch(err => console.error(err));

 };
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'weatherinfo.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'af54be9f19bd4923a12125318222405'
// 	}
// };

// fetch('http://api.weatherapi.com/v1/current.json', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));