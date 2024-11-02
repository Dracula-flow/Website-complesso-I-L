// Script per la mappa, utilizzando leaflet.

//View iniziale della mappa
var map = L.map('map').setView([45.070, 7.68], 13);

//Tiling della mappa
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Set di un marker sulla mappa
var marker = L.marker([45.078, 7.70]).addTo(map);