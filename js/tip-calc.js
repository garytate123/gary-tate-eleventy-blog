document.getElementById("name-btn").addEventListener("click", userName);

function userName(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value; 
    
    document.getElementById("userName").innerHTML = firstName.toUpperCase() + " " + lastName.toUpperCase();
}
    
document.getElementById("calc-btn").addEventListener("click", answer);
function answer(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;       
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    result = num1 + num2;
    document.getElementById("answer").innerHTML = result;
    
}
    


//Calculate Tip
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

  // Form Validation
  