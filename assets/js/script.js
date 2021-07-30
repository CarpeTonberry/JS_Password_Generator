// Assignment code here
var passwordGen = "";

//We'll use 4 arrays atleast 
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F"];
var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = ["!", "@", "#", "%", "^", "&", "*", "(", ")"];

var passwordField = document.getElementById("password");
//We'll have a master array and then we'll add arrays to the master array 
var masterArray = []

//Links Button Action to Button  
var generateBtn = document.querySelector("#generate");

//We'll use a random generator to pull chracters from masterArray <----------- Function 
function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];
  //console.log(randomElement)
  return randomElement;
}

// Write password to the #password input
function writePassword() {

  // var password = generatePassword();                       <--------------- TEMP 

  // We'll use window.confirm() / window.prompt() to collect the infromation from the user 
  var passwordLengthConfirm = window.prompt("How long do you want your password to be?")

  // We only need to confirm 'true' statements 
  if (passwordLengthConfirm >= 8 && passwordLengthConfirm <= 128) {
    var lowerCaseConfirm = window.confirm("Do you want lower case letters in your password?")
    if (lowerCaseConfirm === true) {
      masterArray = masterArray.concat(lowerCaseArray);
    }

    var upperCaseConfirm = window.confirm("Do you want upper case letters in your password?")
    if (upperCaseConfirm === true) {
      masterArray = masterArray.concat(upperCaseArray);
    }

    var numericConfirm = window.confirm("Do you want numbers in your password?")
    if (numericConfirm === true) {
      masterArray = masterArray.concat(numericArray);
    }

    var specialCharConfirm = window.confirm("Do you want special characters in your password?")
    if (specialCharConfirm === true) {
      masterArray = masterArray.concat(specialCharArray);
    }

    // We're going to use a for loop that will determine the amount of characters (ex: if we incrment 5* is will create a password with 5 characters )
    // for (var i = passwordLengthConfirm; i > 0; i--) { (this is the same as the below) 
    for (var i = 0; i < passwordLengthConfirm; i++) {
      var newLetter = getRandom(masterArray);
      console.log(newLetter);
      // I'm putting newLetter into Password gen
      passwordGen = passwordGen + newLetter;
    }


    // put password gen into the passwordfield 
    passwordField.append(passwordGen);



    console.log(passwordGen)

  }
}

//Asign a random character from masterArray into passwordGen 
//We will use mathRandom(math.floor OR math.celiling) 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);