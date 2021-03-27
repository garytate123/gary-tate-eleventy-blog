// Index
// LIVE ON WEBSITE
// 1. Form Validation
// 2. Simple form
// 3. Simple calculator 1
// 4. Tip Calculate
// 5. Countdown Timer

// NOT LIVE ON WEBSITE
// 6. seven times table starts here
// 7. Fav Food Array and for loop starts here
// 8. Object for user starts here
// 9. recipe object with arrays and loops starts here

// 10. CONDITIONAL STATEMENT: SWITCH STATEMENT: 
// drink order function starts here


// 1. Form Validation starts here
const form = document.getElementById("validation-form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (event){
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  let isValid = true;

// first name starts here
  if(firstNameValue === "") {
    firstName.classList.remove("success");
    firstName.classList.add("error");
    isValid = false;
  } 
  else {
    firstName.classList.remove("error");
    firstName.classList.add("success");
  }
// first name ends here
// Last name starts here

  if(lastNameValue === "") {
    lastName.classList.remove("success");
    lastName.classList.add("error");
    isValid = false;
  } 
  else {
    lastName.classList.remove("error");
    lastName.classList.add("success");
  }
// Last name ends here
// Email Starts here
  if(emailValue === "") {
    email.classList.remove("success");
    email.classList.add("error");
    isValid = false;
  } 
  else {
    email.classList.remove("error");
    email.classList.add("success");
  }
// Email ends here
// Password starts here
  if(passwordValue === "") {
    password.classList.remove("success");
    password.classList.add("error");
    isValid = false;
  } 
  else {
    password.classList.remove("error");
    password.classList.add("success");
  }
// Password ends here
  if(!isValid) {
    event.preventDefault();
  } else {
    location.reload();
  }
});
// Form Validation ends here

// ---------------------------------------------------------------------------------------

// 2. Simple form starts here
document.getElementById("name-btn").addEventListener("click", userName);
function userName(){
    var firstName = document.getElementById("simpleFormFirstName").value;
    var lastName = document.getElementById("simpleFormLastName").value; 
    
    document.getElementById("userNameOutput").innerHTML = firstName.toUpperCase() + " " + lastName.toUpperCase();
  }
// Simple form Ends here

// ---------------------------------------------------------------------------------------

// 3. Simple calculator 1 starts here
document.getElementById("calc-btn").addEventListener("click", answer);
function answer(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;           
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    result = num1 + num2;
    document.getElementById("answer").innerHTML = result;
}
// Simple calculator 1 ends here

// ---------------------------------------------------------------------------------------

//4. Tip Calculate starts here
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;
  //validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  //Calculate tip
  var total = (billAmt * serviceQual) / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}
//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();
};
// Tip Calculate ends here

// ---------------------------------------------------------------------------------------

// 5. Countdown Timer starts here
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2022";

function countdown() {
const newYearsDate = new Date(newYears);
const currentDate = new Date();

const totalSeconds = (newYearsDate - currentDate) / 1000;

const days = Math.floor(totalSeconds / 3600 / 24);
const hours = Math.floor(totalSeconds / 3600) % 24; 
const minutes = Math.floor(totalSeconds / 60) % 60;
const seconds = Math.floor(totalSeconds) % 60;

daysEl.innerHTML = days; 
hoursEl.innerHTML = hours;
minsEl.innerHTML = minutes;
secondsEl.innerHTML = seconds;

}

countdown();
setInterval(countdown, 1000);
// Countdown Timer ends here

// ---------------------------------------------------------------------------------------


//6. seven times table starts here
for (var number = 0; number <= 100; number = number + 7 ){
  // console.log(number);
}
// seven times table starts here

// ---------------------------------------------------------------------------------------

// 7. Fav Food Array and for loop starts here
var favFood = ["Fish", "Chips", "Pizza", "Chicken Balti"]

console.log("I want to eat " + favFood[0] + " and " + favFood[1]);

// This will loop over the array of favFood and print each item of food
for (var i = 0; i < favFood.length; i++){
  console.log(favFood[i] + " are on the list of favorite foods.");
}

// This will loop over the array of favFood and print each item of food
for (var food of favFood) {
  console.log("I like to eat " + food + " on a Friday night.");
}
// Fav Food Array and for loop starts here

// ---------------------------------------------------------------------------------------

// 8. Object for user starts here
var user = {
  fName: "Gary",
  lName: "Tate",
  age: 41,
  dob: {day: 28, month: 01, year: 1980}
};

user.age = 50; // this would change age to 50

delete user.lName
user.lName = "Tate" // this would create lName 
// Object for user ends here

// ---------------------------------------------------------------------------------------

// 9. recipe object with arrays and loops starts here
var recipe = {
  recipeTitle: "Easy biscuits",
  servings: 25,
  ingredients: ["200g unsalted butter", "softened 200g white caster sugar", "1 medium egg", "lightly beaten", "400g plain flour"],
  directions: ["In a large mixing bowl, use an electric whisk to cream the butter with the sugar until well mixed and just creamy in texture. Do not overwork, or the biscuits will spread during baking.", "Beat in the egg until well combined. Add the flour and mix on a low speed until a dough forms. Gather the dough into a ball, wrap in cling film and chill for at least 1 hour.", "Preheat the oven to 190°C, fan 170°C, gas 5. Put the dough on a lightly floured surface and knead briefly, then roll out to 3mm thick. Cut, by hand or with cookie cutters, to your desired shape. Using a palette knife, transfer the biscuits to a baking tray lined with baking parchment.", "Bake for 12-14 minutes, depending on the size of your biscuits, until golden brown at the edges. Remove from the oven and transfer to a wire rack to cool." ]
}

console.log("To make " + recipe.servings + " " + recipe.recipeTitle +  ", you will need... ")  

for (var i = 0; i < recipe.ingredients.length; i++){
  console.log("# " + recipe.ingredients[i]);
  }
console.log("The directions for making " + recipe.recipeTitle + " are..." )  

for (var i = 0; i < recipe.directions.length; i++){
    console.log("# " + recipe.directions[i])
}  

for (var instructions of recipe) {
    console.log("To make  " + recipeTitle + " you will need " + ingredients);
  }
// recipe object with arrays and loops ends here

// -----------------------------------------------------------------------------------------------

//10. CONDITIONAL STATEMENT: SWITCH STATEMENT: 
// drink order function starts here
function drinkOrder(size, drink){
  var drinkOrder = size + " " + drink;
  var message = "You have ordered a " + drinkOrder;

  switch (drink) {
      case "cola": 
          message = message + ", " + "would you like a slice of Chocolate cake with your " + drinkOrder + "?" 
          break;
      case "lemon": 
          message = message + ", " + "would you like a slice of Lemon Cheese cake with your " + drinkOrder + "?" 
          break;
      case "orange": 
          message = message + ", " + "would you like a slice of Terry's Chocolate Orange cake with your " + drinkOrder + "?" 
          break;
  }
  return message;
}
console.log(drinkOrder("medium", "lemon"));
// drink order function ends here

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------


