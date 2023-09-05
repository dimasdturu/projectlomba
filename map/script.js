// Inisialisasi peta
var mymap = L.map('map').setView([-2.5489, 118.0149], 5); // Atur koordinat dan zoom awal yang sesuai

// Menambahkan lapisan peta dasar dari Leaflet
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mymap);
