// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

tableData.forEach((tableData) => {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
})

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

//   var filteredData = tableData.filter(datetime => tableData.datetime === inputValue);
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  var useData = tableData;
  if(inputValue != "All")
    {
        useData = filteredData;
    };

  console.log(filteredData);
  d3.select('#tableufo').html("")
 
  useData.forEach((useData) => {
    var row = tbody.append("tr");
    Object.entries(useData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  })
});
