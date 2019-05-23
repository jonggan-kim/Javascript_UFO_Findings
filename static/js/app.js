// from data.js
var tableData = data;
 console.log(tableData);
var tbody = d3.select("tbody");


function buildTable(dataArr) {

tbody.html("");

dataArr.forEach((dataRow) => {
  var row = tbody.append("tr");
  Object.entries(dataRow).forEach(([key, value]) => {
    var cell = row.append("td");
    // console.log(key, value)
    cell.text(value);
  });
});

}


function handleClick() {
	d3.event.preventDefault();
	var date = d3.select("#datetime").property("value");
  // var city = d3.select("#city").property("value");
  // var state = d3.select("#state").property("value");
  // var country = d3.select("#country").property("value");
  // var shape = d3.select("#shape").property("value");
	console.log(date)
  // console.log(state)
	var  filterData = tableData;
	if (date) {
   // Apply `filter` to the table data to only keep the
   // rows where the `datetime` value matches the filter value
   filterData = filterData.filter(row => row.datetime === date);
   console.log(filterData)
   buildTable(filterData);
   // if (city) {
   // filterData = filterData.filter(row => row.city === city);
   // console.log(filterData)
   // buildTable(filterData);
   // if (state) {
   // filterData = filterData.filter(row => row.state === state);
   // console.log(filterData)
   // buildTable(filterData);
   // if (country) {
   // filterData = filterData.filter(row => row.country === country);
   // console.log(filterData)
   // buildTable(filterData);
   // if (shape) {
   // filterData = filterData.filter(row => row.shape === shape);
   // console.log(filterData)
   // buildTable(filterData);

 }
}


d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);




// YOUR CODE HERE!



// # Unit 14 | Assignment - JavaScript and DOM Manipulation

// ## Background

// WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

// There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

// That's why we are hiring you. We need you to write code that will create a table dynamically based upon a [dataset we provide](StarterCode/static/js/data.js). We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.

// You can handle this... right? The planet Earth needs to know what we have found!

// ## Your Task

// ### Level 1: Automatic Table and Date Search

// * Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).

// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

//   * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

// * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

// ### Level 2: Multiple Search Categories (Optional)

// * Complete all of Level 1 criteria.

// * Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

//   1. `date/time`
//   2. `city`
//   3. `state`
//   4. `country`
//   5. `shape`

// - - -

// ### Dataset

// * [UFO Sightings Data](StarterCode/static/js/data.js)

// - - -

// **Good luck!**

// - - -

// ### Copyright

// Data Boot Camp © 2018. All Rights Reserved.