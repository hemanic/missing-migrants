//Horizontal Bar for Migration Route vs. Total Dead/Missing
var regions = [...new Set(data.map(data => data.Region_of_Incident))];
var deadAndMissingByRegion = []

regions.forEach(r => {
  var deaths = data.filter( d => d.Region_of_Incident === r).reduce((total, arr) => {return total + arr.Total_Dead_and_Missing}, 0);
  deadAndMissingByRegion.push({region: r, deaths: deaths});
});

deadAndMissingByRegion.sort((a,b) => a.deaths - b.deaths);
console.log(deadAndMissingByRegion); 
   
// Trace1 for the Migration vs Total Dead/Missing Data
var trace1 = [{
    x: deadAndMissingByRegion.map(deadAndMissingByRegion => deadAndMissingByRegion.region),
    y: deadAndMissingByRegion.map(deadAndMissingByRegion=>deadAndMissingByRegion.deaths),
    type: "bar",
    //orientation: "h"
  }];
  
  // Apply the group bar mode to the layout
  var layout = {
    title: "Region of Incident vs Total Missing",
    yaxis:{
        automargin: true,},
  };    
  
// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", trace1, layout);

  //Grouped Bar Chart of Percentage Distribution of Source Quality   var trace1 = {
    var trace2 = {
        x: ['Calais to United Kingdom', 'Caribbean to Central America', 'Central America to US',
          'Central Mediterranean', 'Darien Gap', 'Dominican Republic to Puerto Rico', 'Eastern Mediterranean',
          'From Haiti to Dajabon Dominican Republic', 'Horn Africa to Yemen', 'Italy to France','Malaysia to Indonesia',
          'Venezuela to Curaçao', 'Western African', 'Western Balkans', 'Western Mediterranean'],
        y: [28, 2, 449, 90, 4, 0, 58, 1, 2, 1, 0, 1, 7, 20, 51],
        name: '1',
        type: "bar",
        marker: {
          color: 'rgb(51, 153, 255)',
          opacity: 0.7,
        }
      };
      var trace3 = {
        x: ['Calais to United Kingdom', 'Caribbean to Central America', 'Central America to US',
          'Central Mediterranean', 'Darien Gap', 'Dominican Republic to Puerto Rico', 'Eastern Mediterranean',
          'From Haiti to Dajabon Dominican Republic', 'Horn Africa to Yemen', 'Italy to France','Malaysia to Indonesia',
          'Venezuela to Curaçao', 'Western African', 'Western Balkans', 'Western Mediterranean'],
        y: [0, 0, 6, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
        name: '2',
        type: "bar",
        marker: {
          color: 'rgb(0, 255, 255)',
          opacity: 0.7,
        }
      };
      var trace4 = {
        x: ['Calais to United Kingdom', 'Caribbean to Central America', 'Central America to US',
          'Central Mediterranean', 'Darien Gap', 'Dominican Republic to Puerto Rico', 'Eastern Mediterranean',
          'From Haiti to Dajabon Dominican Republic', 'Horn Africa to Yemen', 'Italy to France','Malaysia to Indonesia',
          'Venezuela to Curaçao', 'Western African', 'Western Balkans', 'Western Mediterranean'],
        y: [24, 0, 471, 63, 9, 6, 33, 0, 0, 21, 0, 0, 18, 39, 303],
        name: '3',
        type: "bar",
        marker: {
          color: 'rgb(0, 204, 0)',
          opacity: 0.7,
        }
      };
      var trace5 = {
        x: ['Calais to United Kingdom', 'Caribbean to Central America', 'Central America to US',
          'Central Mediterranean', 'Darien Gap', 'Dominican Republic to Puerto Rico', 'Eastern Mediterranean',
          'From Haiti to Dajabon Dominican Republic', 'Horn Africa to Yemen', 'Italy to France','Malaysia to Indonesia',
          'Venezuela to Curaçao', 'Western African', 'Western Balkans', 'Western Mediterranean'],
        y: [56, 4, 280, 1468, 0, 0, 228, 0, 52, 4, 4, 0, 0, 80, 252],
        name: '4',
        type: "bar",
        marker: {
          color: 'rgb(255, 204, 0)',
          opacity: 0.7,
        }
      };
      var trace6 = {
        x: ['Calais to United Kingdom', 'Caribbean to Central America', 'Central America to US',
          'Central Mediterranean', 'Darien Gap', 'Dominican Republic to Puerto Rico', 'Eastern Mediterranean',
          'From Haiti to Dajabon Dominican Republic', 'Horn Africa to Yemen', 'Italy to France','Malaysia to Indonesia',
          'Venezuela to Curaçao', 'Western African', 'Western Balkans', 'Western Mediterranean'],
        y: [5, 0, 4140,100, 0, 0, 520, 0, 0, 0, 0, 10, 50, 200],
        name: '5',
        type: "bar",
        marker: {
          color: 'rgb(255, 0, 0)',
          opacity: 0.7,
        }
      };
      // // data
      var data = [trace2, trace3, trace4, trace5, trace6];
    
      // var data = [trace1];
      
      // Apply the group bar mode to the layout
      var layout = {
        barmode: 'group',
        title: "Source Quality by Migration Route",
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 200
        
        }
      };
      
      // Render the plot to the div tag with id "plot"
      Plotly.newPlot("plot2", data, layout);
  //Pie Chart

  var data = [{
    values: [51,3,1507,499,7,2,230,1,15,9,1,1,15,64,255],
    labels: ['Calais to United Kingdom', 'Caribbean to Central America', 'Central America to US',
    'Central Mediterranean', 'Darien Gap', 'Dominican Republic to Puerto Rico', 'Eastern Mediterranean',
    'From Haiti to Dajabon Dominican Republic', 'Horn Africa to Yemen', 'Italy to France','Malaysia to Indonesia',
    'Venezuela to Curaçao', 'Western African', 'Western Balkans', 'Western Mediterranean'],
    type: 'pie'
  }];
  
  var layout = {
    title: "Frequency of Migration Routes",
    height: 700,
    width: 800,
    automargin: true,
  };
  
  Plotly.newPlot("plot3", data, layout);

//Cause of Death Bar Chart  
var trace7 = {
  x: ['Dehydration', 'Drowning', 'Hypothermia', 'Presumed drowning', 'Shot', 'Sickness and lack of access to medicines', 'Starvation',
      'Unknown', 'Unknown (skeletal remains)', 'Vehicle Accident'],
  y: [1, 25, 0, 17, 2, 0, 0, 7, 0, 2],
  // y2: ['Caribbean', 'Central America', 'Central Asia', 'East Asia', 'Europe', 'Horn of Africa', 'Mediterranean', 'Middle East', 'North Africa',
  //     'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'US-Mexico Border'],
  name: 'Caribbean',
  type: "bar",
  marker: {
      color: 'rgb(51, 153, 255)',
      opacity: 0.7,
  }
};
var trace8 = {
  x: ['Dehydration', 'Drowning', 'Hypothermia', 'Presumed drowning', 'Shot', 'Sickness and lack of access to medicines', 'Starvation',
      'Unknown', 'Unknown (skeletal remains)', 'Vehicle Accident'],
  y: [2, 19, 0, 2, 21, 1, 0, 21, 1, 36],
  // y2: ['Caribbean', 'Central America', 'Central Asia', 'East Asia', 'Europe', 'Horn of Africa', 'Mediterranean', 'Middle East', 'North Africa',
  //     'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'US-Mexico Border'],
  name: 'Central America',
  type: "bar",
  marker: {
      color: 'rgb(128,128,128)',
      opacity: 0.7,
  }
};
var trace9 = {
  x: ['Dehydration', 'Drowning', 'Hypothermia', 'Presumed drowning', 'Shot', 'Sickness and lack of access to medicines', 'Starvation',
      'Unknown', 'Unknown (skeletal remains)', 'Vehicle Accident'],
  y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  // y2: ['Caribbean', 'Central America', 'Central Asia', 'East Asia', 'Europe', 'Horn of Africa', 'Mediterranean', 'Middle East', 'North Africa',
  //     'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'US-Mexico Border'],
  name: 'Central Asia',
  type: "bar",
  marker: {
      color: 'rgb(255,69,0)',
      opacity: 0.7,
  }
};
var trace10 = {
  x: ['Dehydration', 'Drowning', 'Hypothermia', 'Presumed drowning', 'Shot', 'Sickness and lack of access to medicines', 'Starvation',
      'Unknown', 'Unknown (skeletal remains)', 'Vehicle Accident'],
  y: [0, 3, 0, 1, 0, 0, 0, 0, 0, 0],
  // y2: ['Caribbean', 'Central America', 'Central Asia', 'East Asia', 'Europe', 'Horn of Africa', 'Mediterranean', 'Middle East', 'North Africa',
  //     'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'US-Mexico Border'],
  name: 'East Asia',
  type: "bar",
  marker: {
      color: 'rgb(0, 0, 0)',
      opacity: 0.7,
  }
};

var trace11 = {
  x: ['Dehydration', 'Drowning', 'Hypothermia', 'Presumed drowning', 'Shot', 'Sickness and lack of access to medicines', 'Starvation',
      'Unknown', 'Unknown (skeletal remains)', 'Vehicle Accident'],
  y: [0, 29, 17, 12, 4, 3, 0, 12, 0, 52],
  // y2: ['Caribbean', 'Central America', 'Central Asia', 'East Asia', 'Europe', 'Horn of Africa', 'Mediterranean', 'Middle East', 'North Africa',
  //     'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'US-Mexico Border'],
  name: 'Europe',
  type: "bar",
  marker: {
      color: 'rgb(0, 110, 200)',
      opacity: 0.7,
  }
};
var trace12 = {
  x: ['Dehydration', 'Drowning', 'Hypothermia', 'Presumed drowning', 'Shot', 'Sickness and lack of access to medicines', 'Starvation',
      'Unknown', 'Unknown (skeletal remains)', 'Vehicle Accident'],
  y: [9, 30, 0, 2, 2, 103, 5, 6, 0, 16],
  // y2: ['Caribbean', 'Central America', 'Central Asia', 'East Asia', 'Europe', 'Horn of Africa', 'Mediterranean', 'Middle East', 'North Africa',
  //     'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'US-Mexico Border'],
  name: 'Horn of Africa',
  type: "bar",
  marker: {
      color: 'rgb(140, 255, 10)',
      opacity: 0.7,
  }
};
var trace13 = {
  x: ['Dehydration', 'Drowning', 'Hypothermia', 'Presumed drowning', 'Shot', 'Sickness and lack of access to medicines', 'Starvation',
      'Unknown', 'Unknown (skeletal remains)', 'Vehicle Accident'],
  y: [3, 535, 12, 227, 5, 4, 0, 138, 0, 0],
  // y2: ['Caribbean', 'Central America', 'Central Asia', 'East Asia', 'Europe', 'Horn of Africa', 'Mediterranean', 'Middle East', 'North Africa',
  //     'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'US-Mexico Border'],
  name: 'Mediterranean',
  type: "bar",
  marker: {
      color: 'rgb(150, 200, 45)',
      opacity: 0.7,
  }
};

var trace14 = {
  x: ['Dehydration', 'Drowning', 'Hypothermia', 'Presumed drowning', 'Shot', 'Sickness and lack of access to medicines', 'Starvation',
      'Unknown', 'Unknown (skeletal remains)', 'Vehicle Accident'],
  y: [0, 9, 10, 5, 63, 50, 0, 2, 0, 12],
  // y2: ['Caribbean', 'Central America', 'Central Asia', 'East Asia', 'Europe', 'Horn of Africa', 'Mediterranean', 'Middle East', 'North Africa',
  //     'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'US-Mexico Border'],
  name: 'Middle East',
  type: "bar",
  marker: {
      color: 'rgb(255, 180, 0)',
      opacity: 0.7,
  }
};

var trace15 = {
  x: ['Dehydration', 'Drowning', 'Hypothermia', 'Presumed drowning', 'Shot', 'Sickness and lack of access to medicines', 'Starvation',
      'Unknown', 'Unknown (skeletal remains)', 'Vehicle Accident'],
  y: [44, 10, 6, 6, 31, 435, 76, 50, 0, 112],
  // y2: ['Caribbean', 'Central America', 'Central Asia', 'East Asia', 'Europe', 'Horn of Africa', 'Mediterranean', 'Middle East', 'North Africa',
  //     'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'US-Mexico Border'],
  name: 'North Africa',
  type: "bar",
  marker: {
      color: 'rgb(255, 182, 193)',
      opacity: 0.7,
  }
};

var trace16 = {
  x: ['Dehydration', 'Drowning', 'Hypothermia', 'Presumed drowning', 'Shot', 'Sickness and lack of access to medicines', 'Starvation',
      'Unknown', 'Unknown (skeletal remains)', 'Vehicle Accident'],
  y: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  // y2: ['Caribbean', 'Central America', 'Central Asia', 'East Asia', 'Europe', 'Horn of Africa', 'Mediterranean', 'Middle East', 'North Africa',
  //     'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'US-Mexico Border'],
  name: 'North America',
  type: "bar",
  marker: {
      color: 'rgb(255, 50, 50)',
      opacity: 0.7,
  }
};
var trace17 = {
  x: ['Dehydration', 'Drowning', 'Hypothermia', 'Presumed drowning', 'Shot', 'Sickness and lack of access to medicines', 'Starvation',
      'Unknown', 'Unknown (skeletal remains)', 'Vehicle Accident'],
  y: [1, 3, 4, 4, 0, 0, 0, 1, 0, 2],
  // y2: ['Caribbean', 'Central America', 'Central Asia', 'East Asia', 'Europe', 'Horn of Africa', 'Mediterranean', 'Middle East', 'North Africa',
  //     'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'US-Mexico Border'],
  name: 'South America',
  type: "bar",
  marker: {
      color: 'rgb(240, 200, 10)',
      opacity: 0.7,
  }
};

var trace18 = {
  x: ['Dehydration', 'Drowning', 'Hypothermia', 'Presumed drowning', 'Shot', 'Sickness and lack of access to medicines', 'Starvation',
      'Unknown', 'Unknown (skeletal remains)', 'Vehicle Accident'],
  y: [0, 0, 0, 0, 23, 6, 0, 9, 0, 87],
  // y2: ['Caribbean', 'Central America', 'Central Asia', 'East Asia', 'Europe', 'Horn of Africa', 'Mediterranean', 'Middle East', 'North Africa',
  //     'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'US-Mexico Border'],
  name: 'Southeast Asia',
  type: "bar",
  marker: {
      color: 'rgb(200, 41, 154)',
      opacity: 0.7,
  }
};

var trace19 = {
  x: ['Dehydration', 'Drowning', 'Hypothermia', 'Presumed drowning', 'Shot', 'Sickness and lack of access to medicines', 'Starvation',
      'Unknown', 'Unknown (skeletal remains)', 'Vehicle Accident'],
  y: [31, 15, 0, 7, 2, 150, 7, 40, 0, 93],
  // y2: ['Caribbean', 'Central America', 'Central Asia', 'East Asia', 'Europe', 'Horn of Africa', 'Mediterranean', 'Middle East', 'North Africa',
  //     'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'US-Mexico Border'],
  name: 'Sub-Saharan Africa',
  type: "bar",
  marker: {
      color: 'rgb(58, 140, 135)',
      opacity: 0.7,
  }
};

var trace20 = {
  x: ['Dehydration', 'Drowning', 'Hypothermia', 'Presumed drowning', 'Shot', 'Sickness and lack of access to medicines', 'Starvation',
      'Unknown', 'Unknown (skeletal remains)', 'Vehicle Accident'],
  y: [30, 261, 29, 49, 9, 4, 0, 256, 468, 23],
  // y2: ['Caribbean', 'Central America', 'Central Asia', 'East Asia', 'Europe', 'Horn of Africa', 'Mediterranean', 'Middle East', 'North Africa',
  //     'North America', 'South America', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'US-Mexico Border'],
  name: 'US-Mexico Border',
  type: "bar",
  marker: {
      color: 'rgb(186,85,211)',
      opacity: 0.7,
  }
};
// // data
var data = [trace7, trace8, trace9, trace10, trace11, trace12, trace13, trace14, trace15, trace16, trace17, trace18, trace19, trace20];

// var data = [trace1];

// Apply the group bar mode to the layout
var layout = {
  barmode: 'group',
  title: "Cause of Death by Region",
  margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 200
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot4", data, layout);