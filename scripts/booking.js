/*** create variables ***/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dayCount = 0;
let dayCost = 0;
let dayRate = 35;
let half = document.getElementById("half");
let full = document.getElementById("full");
let calculatedCost = document.getElementById("calculated-cost");

/*** colour change days of week ***/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function addClicked(day) {
  if (day.classList.contains("blue-hover-selected")) {
    day.classList.remove("blue-hover-selected");
    dayCount = dayCount - 1;
  } else {
    day.classList.add("blue-hover-selected");
    dayCount = dayCount + 1;
  }
  calcCost();
}

document.getElementById("monday").onclick = function () {
  addClicked(monday);
};
document.getElementById("tuesday").onclick = function () {
  addClicked(tuesday);
};
document.getElementById("wednesday").onclick = function () {
  addClicked(wednesday);
};
document.getElementById("thursday").onclick = function () {
  addClicked(thursday);
};
document.getElementById("friday").onclick = function () {
  addClicked(friday);
};

/*** clear days ***/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.getElementById("clear-button");

clearButton.onclick = (); {
  document.getElementById("monday").classList.remove("blue-hover-selected");
  document.getElementById("tuesday").classList.remove("blue-hover-selected");
  document.getElementById("wednesday").classList.remove("blue-hover-selected");
  document.getElementById("thursday").classList.remove("blue-hover-selected");
  document.getElementById("friday").classList.remove("blue-hover-selected");
  dayCount = 0;
  dayCost = 0;
  calcCost();
}

/*** change rate ***/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half.onclick = (); {
  dayRate = 20;
  half.classList.add("blue-hover-selected");
  full.classList.remove("blue-hover-selected");
  calcCost();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.onclick = (); {
  dayRate = 35;
  half.classList.remove("blue-hover-selected");
  full.classList.add("blue-hover-selected");
  calcCost();
}

/*** calculate ***/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calcCost() {
  dayCost = dayRate * dayCount;
  calculatedCost.innerHTML = `${dayCost}`;
}