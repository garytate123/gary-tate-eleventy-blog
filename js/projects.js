

// drink order function starts here
// function drinkOrder(size, drink){
//   var drinkOrder = size + " " + drink;
//   var message = "You have ordered a " + drinkOrder;

//   switch (drink) {
//       case "cola": 
//           message = message + ", " + "would you like a slice of Chocolate cake with your " + drinkOrder + "?" 
//           break;
//       case "lemon": 
//           message = message + ", " + "would you like a slice of Lemon Cheese cake with your " + drinkOrder + "?" 
//           break;
//       case "orange": 
//           message = message + ", " + "would you like a slice of Terry's Chocolate Orange cake with your " + drinkOrder + "?" 
//           break;
//   }
//   return message;
// }
// console.log(drinkOrder("medium", "lemon"));
// drink order function starts here

// Form Validation starts here
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
//  Password starts here
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

// Simple for starts here
document.getElementById("name-btn").addEventListener("click", userName);
function userName(){
    var firstName = document.getElementById("simpleFormFirstName").value;
    var lastName = document.getElementById("simpleFormLastName").value; 
    
    document.getElementById("userNameOutput").innerHTML = firstName.toUpperCase() + " " + lastName.toUpperCase();

  }
// Simple form Ends here
    

// Simple calculator 1 starts here
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


//Calculate Tip starts here
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
//Calculate Tip ends here

// Countdown Timer starts here


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