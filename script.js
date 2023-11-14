// JavaScript

console.log('Hello world!');

var map = L.map('map').setView([33.671348877245634, 130.44442368478892], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//アイコン
const whiteIcon = L.icon({
  iconUrl: 'images/ico.png',
  shadowUrl: 'images/ico_shadow.png',

iconSize:     [40, 40], // size of the icon
shadowSize:   [40, 40], // size of the shadow
iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
shadowAnchor: [20, 40],  // the same for the shadow
popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
});


L.marker([33.671348877245634, 130.44442368478892], { icon: whiteIcon }).addTo(map).bindPopup('うちらの大学<br><img src="images/img01.png" alt="img">');

