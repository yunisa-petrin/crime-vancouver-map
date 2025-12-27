// Inisialisasi peta
const map = L.map('map', {
  preferCanvas: true
}).setView([49.2827, -123.1207], 11);

// Basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Load GeoJSON
fetch('data/crime_vancouver.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data).addTo(map);
  })
  .catch(err => console.error(err));
