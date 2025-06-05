const map = L.map('map').setView([50, 50], 1);  
L.imageOverlay('map.png', [[0, 0], [100, 100]]).addTo(map);  
