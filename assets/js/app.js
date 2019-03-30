// svg container
var height = 500;
var width = 800;

// margins
var margin = {
  top: 40,
  right: 40,
  bottom: 40,
  left: 40
};

// // chart area minus margins
// var chartHeight = height - margin.top - margin.bottom;
// var chartWidth = width - margin.left - margin.right;

// create svg container
var svg = d3.select("#scatter").append("svg")
    .attr("height", height)
    .attr("width", width)
    .style("background-color","abcdef");

// shift everything over by the margins
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// http://learnjsdata.com/read_data.html
d3.csv("data.csv").then(function(data) {
        console.log(data[0]);
      });
      

////Jeff's Code   
// function renderData(xData, yData) {
//   d3.csv('data.csv').then((data) => {
//       d3.selectAll('circle').remove()
//       chartGroup.selectAll("g").remove()
//       chartGroup.selectAll("text").remove()
      
//       let colNames = Object.keys(d3.values(data)[0]);
//       console.log(colNames)
//       data.forEach(x => {
//           x.xData = +x[xData];
//           x.yData = +x[yData]
//       })
//       // compare income and yData
//       xScale = d3.scaleLinear()
//           .domain(d3.extent(data, d => d.xData))
//           .range([0, width])
//       bottomAxis = d3.axisBottom(xScale)
//       yScale = d3.scaleLinear()
//           .domain(d3.extent(data, d => d.yData))
//           .range([height, 0]) // value -> display
//       leftAxis = d3.axisLeft(yScale)
//       chartGroup.append("g")
//           .attr("transform", `translate(0, ${height})`)
//           .call(bottomAxis);
//       chartGroup.append("g")
//           .call(leftAxis);
//     });
// }

















// // Step 2: Create scale functions
// // scale y to chart height
// var yScale = d3.scaleLinear()
//     .domain([0, d3.max(d.healthcare)]) 
//     .range([chartHeight, 0]);

// // scale x to chart width
// var xScale = d3.scaleBand()
//     .domain(d.poverty)
//     .range([0, chartWidth])
//     .padding(0.1);

// // create axes
// var yAxis = d3.axisLeft(yScale);
// var xAxis = d3.axisBottom(xScale);

// // set x to the bottom of the chart
// chartGroup.append("g")
//     .attr("transform", `translate(0, ${chartHeight})`)
//     .call(xAxis);

// // set y to the y axis
// chartGroup.append("g")
//     .call(yAxis);



// //set x & y axis to the data 




//PENELTY BOX:
// // import data from the csv
// d3.csv('data.csv').then(function(healthData) {
//         healthData.forEach(function(d) {
//             d.healthcare = +d.healthcare;
//             d.poverty = +d.poverty;
//         });
//     console.log(d.healthcare)
// });
