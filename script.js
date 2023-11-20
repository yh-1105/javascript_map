// JavaScript

console.log('Hello world!');

var map = L.map('map').setView([33.671348877245634, 130.44442368478892], 15);

//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

// Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);

//アイコン（1つ）
//const whiteIcon = L.icon({
  //iconUrl: 'images/ico.png',
  //shadowUrl: 'images/ico_shadow.png',

//iconSize:     [40, 40], // size of the icon
//shadowSize:   [40, 40], // size of the shadow
//iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
//shadowAnchor: [20, 40],  // the same for the shadow
//popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
//});

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
  options: {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });


L.marker([33.671348877245634, 130.44442368478892], { icon: whiteIcon }).addTo(map).bindPopup('うちらの大学<br><img src="images/img01.png" alt="img">');
L.marker([33.67267119762145, 130.44317830330857], { icon: pinkIcon }).addTo(map).bindPopup('九州産業大学美術館');


// 円の表示
const circle = L.circle([33.67338230246129, 130.44061199152367], {
  color: 'red', //円の輪郭線の色
  fillColor: '#f03', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 600 //半径、メートルで指定
}).addTo(map);
circle.bindPopup("半径1kmの範囲");


// 多角形の表示
const polygon = L.polygon([
  [33.65962439740935, 130.4432715385606],
  [33.65452620657084, 130.44156153762975],
  [33.66301439770768, 130.43481480668444]
], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.3
}).addTo(map);


// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);