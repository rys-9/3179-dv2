import * as vega from 'vega';
import * as vegaLite from 'vega-lite';
import { embed } from 'vega-embed';

// const chartSpec = {
//     "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
//     "description": "A simple bar chart example",
//     "data": {
//       "values": [
//         {"category": "A", "count": 28},
//         {"category": "B", "count": 55},
//         {"category": "C", "count": 43},
//         // Add more data as needed
//       ]
//     },
//     "mark": "bar",
//     "encoding": {
//       "x": {"field": "category", "type": "ordinal"},
//       "y": {"field": "count", "type": "quantitative"}
//     }
//   };
  
  

document.addEventListener("DOMContentLoaded", function () {

    var spec2 = "./testMap.vg.json";
    embed('#map', spec2).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

    // // Render the chart using Vega-Embed
    // embed("#map", chartSpec)
    //     .then((result) => {
    //     // Handle any additional actions or interactions here
    // })
    // .catch((error) => {
    //     // Handle any errors here
    //     console.error(error);
    // });
});

