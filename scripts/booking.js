/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

var cost = 35;
var no = 0;

var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");
var clearButton = document.getElementById("clear-button");
var half = document.getElementById("half");
var full = document.getElementById("full");

monday.addEventListener("click", function () {
	colorW(monday);
});

tuesday.addEventListener("click", function () {
	colorW(tuesday);
});

wednesday.addEventListener("click", function () {
	colorW(wednesday);
});

thursday.addEventListener("click", function () {
	colorW(thursday);
});

friday.addEventListener("click", function () {
	colorW(friday);
});

clearButton.addEventListener("click", removeF);

half.addEventListener("click", halfC);

full.addEventListener("click", fullC);

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function colorW(a) {
	if (a.classList.contains("blue-hover")) {
		a.classList.add("clicked");
		a.classList.remove("blue-hover");
		no = no + 1;
	}
	calculate();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function removeF() {
	monday.classList.remove("clicked");
	monday.classList.add("blue-hover");
	tuesday.classList.remove("clicked");
	tuesday.classList.add("blue-hover");
	wednesday.classList.remove("clicked");
	wednesday.classList.add("blue-hover");
	thursday.classList.remove("clicked");
	thursday.classList.add("blue-hover");
	friday.classList.remove("clicked");
	friday.classList.add("blue-hover");
	no = 0;
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfC() {
	cost = 20;
	full.classList.remove("clicked");
	full.classList.add("blue-hover");
	half.classList.add("clicked");
	half.classList.remove("blue-hover");
	calculate();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullC() {
	cost = 35;
	full.classList.add("clicked");
	full.classList.remove("blue-hover");
	half.classList.remove("clicked");
	half.classList.add("blue-hover");
	calculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

var calculate_cost = document.getElementById("calculated-cost");
function calculate() {
	calculate_cost.innerHTML = cost * no;
}
