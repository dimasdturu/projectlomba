fetch(geojsonUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var geojsonLayer = L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
                layer.on('mouseover', function () {
                    var namaDaerah = feature.properties['Propinsi'];
                    layer.bindPopup(namaDaerah).openPopup();
                });

                layer.on('click', function () {
                    var namaDaerah = feature.properties['Propinsi'];
                    layer.bindPopup(namaDaerah).openPopup();
                });
            }
        }).addTo(mymap);

        mymap.fitBounds(geojsonLayer.getBounds());
    });