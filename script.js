// JavaScript

console.log('Hello world!');

var map = L.map('map').setView([33.671348877245634, 130.44442368478892], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
