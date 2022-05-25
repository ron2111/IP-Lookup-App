
const mainPage = document.querySelector('.main-container')
// const heading = document.querySelector('h1');
const ipDisplay = document.querySelector('.ip-display')  
const locationDisplay = document.querySelector('.location-display')
const geoDisplay = document.querySelector('.geolocation-display')
const postal = document.querySelector('.postal')
const isp = document.querySelector('.internet-provider')

const btn = document.querySelector('.lookup-btn');

btn.onclick = function (event) {
    btn.style.display = 'none'
    // heading.textContent= `IP-Lookup App`
    fetch('https://ipapi.co/json').then(response => response.json())
	.then((response) => {
    ipDisplay.textContent= `IP Address: ${response.ip}`
    geoDisplay.textContent= `Geo location: ${response.latitude}°N, ${response.longitude}°E`
    locationDisplay.textContent= `Location: ${response.city}, ${response.region}, ${response.country_name}`
    postal.textContent= `Postal Code: ${response.postal}`
    isp.textContent= `Internet Provider: ${response.org}`

    }).catch(err => console.error(err));

 };
