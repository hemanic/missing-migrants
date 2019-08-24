//==========================
// Create a map object
var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1IjoibmluZ3hpZSIsImEiOiJjanhobHkxbmIwZWZiNDJvOWhnMGxrdXFvIn0.WAaU8Z6-ILZ04pvHGRhwXw");

var layers = {
  Markers: new L.LayerGroup(),
  Circles: new L.LayerGroup(),
}

var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [layers.Markers, layers.Circles]
});

darkmap.addTo(myMap);

var overlays = {
  "Markers": layers.Markers,
  "Circles": layers.Circles
};

L.control.layers(null, overlays).addTo(myMap);




//===============================================
//Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
// for (var i = 0; i < data.length; i++) {
//   var migrant = data[i];
//   if (migrant.Reported_Year > 2018) {
//     L.marker(migrant.Location_Coordinates, {icon: redIcon})
//       .bindPopup("<h2>Missing Date: " + migrant.Reported_Date + "</h2> <hr> <h3>Total Death and Missing: " + migrant.Total_Dead_and_Missing 
//       + "</h3> <h3>Migration Route: " + migrant.Migration_Route + "</h3> <h3>Location: " + migrant.Location_Description + "</h3>")
//         .addTo(myMap);
// } else if (migrant.Reported_Year > 2017) {
//     L.marker(migrant.Location_Coordinates, {icon: blueIcon})
//       .bindPopup("<h2>Missing Date: " + migrant.Reported_Date + "</h2> <hr> <h3>Total Death and Missing: " + migrant.Total_Dead_and_Missing 
//       + "</h3> <h3>Migration Route: " + migrant.Migration_Route + "</h3> <h3>Location: " + migrant.Location_Description + "</h3>")
//         .addTo(myMap);
// } else if (migrant.Reported_Year > 2016) {
//   L.marker(migrant.Location_Coordinates, {icon: greenIcon})
//     .bindPopup("<h2>Missing Date: " + migrant.Reported_Date + "</h2> <hr> <h3>Total Death and Missing: " + migrant.Total_Dead_and_Missing 
//     + "</h3> <h3>Migration Route: " + migrant.Migration_Route + "</h3> <h3>Location: " + migrant.Location_Description + "</h3>")
//       .addTo(myMap);
// } else if (migrant.Reported_Year > 2015) {
//   L.marker(migrant.Location_Coordinates, {icon: yellowIcon})
//     .bindPopup("<h2>Missing Date: " + migrant.Reported_Date + "</h2> <hr> <h3>Total Death and Missing: " + migrant.Total_Dead_and_Missing 
//     + "</h3> <h3>Migration Route: " + migrant.Migration_Route + "</h3> <h3>Location: " + migrant.Location_Description + "</h3>")
//       .addTo(myMap);
// } else if (migrant.Reported_Year > 2014) {
//   L.marker(migrant.Location_Coordinates, {icon: orangeIcon})
//     .bindPopup("<h2>Missing Date: " + migrant.Reported_Date + "</h2> <hr> <h3>Total Death and Missing: " + migrant.Total_Dead_and_Missing 
//     + "</h3> <h3>Migration Route: " + migrant.Migration_Route + "</h3> <h3>Location: " + migrant.Location_Description + "</h3>")
//       .addTo(myMap);
// } else {
//   L.marker(migrant.Location_Coordinates, {icon: greyIcon})
//     .bindPopup("<h2>Missing Date: " + migrant.Reported_Date + "</h2> <hr> <h3>Total Death and Missing: " + migrant.Total_Dead_and_Missing 
//     + "</h3> <h3>Migration Route: " + migrant.Migration_Route + "</h3> <h3>Location: " + migrant.Location_Description + "</h3>")
//       .addTo(myMap);
// }
// }

//===================================
//Map with Circle Markers
function markerSize(number) {
  return number * 1000;
}

for (var i = 0; i < data.length; i++) {
  var migrant = data[i];
  if (migrant.Reported_Year > 2018) {
    L.circle(migrant.Location_Coordinates, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: markerSize(migrant.Total_Dead_and_Missing)
    })
      .bindPopup("<h2>Missing Date: " + migrant.Reported_Date + "</h2> <hr> <h3>Total Death and Missing: " + migrant.Total_Dead_and_Missing 
     + "</h3> <h3>Migration Route: " + migrant.Migration_Route + "</h3> <h3>Location: " + migrant.Location_Description + "</h3>")
      .addTo(myMap);
  } else if (migrant.Reported_Year > 2017) {
    L.circle(migrant.Location_Coordinates, {
      color: 'blue',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: markerSize(migrant.Total_Dead_and_Missing)
    })
      .bindPopup("<h2>Missing Date: " + migrant.Reported_Date + "</h2> <hr> <h3>Total Death and Missing: " + migrant.Total_Dead_and_Missing 
     + "</h3> <h3>Migration Route: " + migrant.Migration_Route + "</h3> <h3>Location: " + migrant.Location_Description + "</h3>")
      .addTo(myMap);
  } else if (migrant.Reported_Year > 2016) {
    L.circle(migrant.Location_Coordinates, {
      color: 'green',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: markerSize(migrant.Total_Dead_and_Missing)
    })
      .bindPopup("<h2>Missing Date: " + migrant.Reported_Date + "</h2> <hr> <h3>Total Death and Missing: " + migrant.Total_Dead_and_Missing 
     + "</h3> <h3>Migration Route: " + migrant.Migration_Route + "</h3> <h3>Location: " + migrant.Location_Description + "</h3>")
      .addTo(myMap);
  } else if (migrant.Reported_Year > 2015) {
    L.circle(migrant.Location_Coordinates, {
      color: 'yellow',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: markerSize(migrant.Total_Dead_and_Missing)
    })
      .bindPopup("<h2>Missing Date: " + migrant.Reported_Date + "</h2> <hr> <h3>Total Death and Missing: " + migrant.Total_Dead_and_Missing 
     + "</h3> <h3>Migration Route: " + migrant.Migration_Route + "</h3> <h3>Location: " + migrant.Location_Description + "</h3>")
      .addTo(myMap);
  } else if (migrant.Reported_Year > 2014) {
    L.circle(migrant.Location_Coordinates, {
      color: 'orange',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: markerSize(migrant.Total_Dead_and_Missing)
    })
      .bindPopup("<h2>Missing Date: " + migrant.Reported_Date + "</h2> <hr> <h3>Total Death and Missing: " + migrant.Total_Dead_and_Missing 
     + "</h3> <h3>Migration Route: " + migrant.Migration_Route + "</h3> <h3>Location: " + migrant.Location_Description + "</h3>")
      .addTo(myMap);
  } else {
    L.circle(migrant.Location_Coordinates, {
      color: 'grey',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: markerSize(migrant.Total_Dead_and_Missing)
    })
      .bindPopup("<h2>Missing Date: " + migrant.Reported_Date + "</h2> <hr> <h3>Total Death and Missing: " + migrant.Total_Dead_and_Missing 
     + "</h3> <h3>Migration Route: " + migrant.Migration_Route + "</h3> <h3>Location: " + migrant.Location_Description + "</h3>")
      .addTo(myMap);
  }
}


//===============================================
//Add a legend to our map
var legend = L.control({position: 'bottomleft'});

legend.onAdd = function(myMap){
  var div = L.DomUtil.create('div', 'info legend'),
    grades = [2014, 2015, 2016, 2017, 2018, 2019],
    labels = [];

    div.innerHTML+='YEAR<br><hr>'
// loop through our density intervals and generate a label with a colored square for each interval
for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
        '<i style="background:' + getColor(grades[i]) + '">&nbsp&nbsp&nbsp&nbsp</i> ' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '- Now');
}
return div;
};

legend.addTo(myMap);

function getColor(d) {
  return d > 2018 ? "red" :
    d > 2017 ? "blue" :
      d > 2016 ? "green" :
        d > 2015 ? "yellow" :
          d > 2014 ? "orange" :
            "grey";
}