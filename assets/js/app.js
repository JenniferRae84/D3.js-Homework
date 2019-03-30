// svg container
var height = 500;
var width = 800;

// margins
var margin = {
  top: 40,
  right: 40,
  bottom: 60,
  left: 60
};

// chart area minus margins
var chartHeight = height - margin.top - margin.bottom;
var chartWidth = width - margin.left - margin.right;

// create svg container
var svg = d3.select("#scatter").append("svg")
    .attr("height", height)
    .attr("width", width)
    //.style("background-color","abcdef");  // used this to see where the svg was

// shift everything over by the margins
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

//// Import data ////     
// http://learnjsdata.com/read_data.html
d3.csv("assets/js/data.csv").then(function(healthData) {
    //console.log(healthData[0]);
    healthData.forEach(function (d) {
        // d.age = +d.age;
        // d.ageMoe = +d.ageMoe;
        d.healthcare = +d.healthcare;
        // d.healthcareHigh = +d.healthcareHigh;
        // d.healthcareLow = +d.healthcareLow;
        // d.income = +d.income;
        // d.incomeMoe = +d.incomeMoe;
        // d.obesity = +d.obesity;
        // d.obesityHigh = +d.obesityHigh;
        // d.obesityLow = +d.obesityLow;
        d.poverty = +d.poverty;
        // d.povertyMoe = +d.povertyMoe;
        // d.smokes = +d.smokes;
        // d.smokesHigh = d.smokesHigh;
        // d.smokesLow = +d.smokesLow;
        // state_abbr = d.abbr
        // console.log(state_abbr);

    })
        
        //// Creating scale functions ////
        // scale y to chart height
        var xScale = d3.scaleLinear()
            .domain([d3.min(healthData, d => d.poverty), d3.max(healthData, d => d.poverty)])
            .range([0, chartWidth]);

        var yScale = d3.scaleLinear()
            .domain([d3.min(healthData, d => d.healthcare), d3.max(healthData, d => d.healthcare)])
            .range([chartHeight, 0]);


        //// Set up axes ////
        // create axes
        var yAxis = d3.axisLeft(yScale);
        var xAxis = d3.axisBottom(xScale);

        // set x to the bottom of the chart
        chartGroup.append("g")
            .attr("transform", `translate(0, ${chartHeight})`)
            .call(xAxis);

        // set y to the y axis
        chartGroup.append("g")
            .call(yAxis);
        
        // create axes labels
        chartGroup.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (height / 2))
            .attr("dy", "1em")
            .attr("class", "axisText")
            .text("Lacks Healthcare (%)");

        chartGroup.append("text")
            .attr("transform", `translate(${width / 3}, ${margin.bottom + chartHeight - 10})`)
            .attr("class", "axisText")
            .text("In Poverty (%)");
          
        //// Circles ////
        // Create Circles
        var circlesGroup = chartGroup.selectAll("circle")
            .data(healthData)
            .enter()
            .append("circle")
            .attr("cx", d => xScale(d.poverty))
            .attr("cy", d => yScale(d.healthcare))
            .attr("r", "10")
            .attr("fill", "blue")
            .attr("opacity", ".5");

        // Add text to circles
        chartGroup.selectAll('circle.text')
            .data(healthData)
            .enter()
            .append("text")
            .attr("x", d => xScale(d.poverty))
            .attr("y", d => yScale(d.healthcare))
            .attr("dy", 5)
            .classed("stateText", true)
            .attr("font-size", "10px")
            .text(function (d) {
                return d.abbr;
        });
    });
   
    