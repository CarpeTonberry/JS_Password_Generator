// We'll create a blank variable that will hold our generated password
var passwordGen = "";

//We'll use 4 arrays for our password generator 
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = ["!", "@", "#", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "<", ">", ",", ".", "?", "/", "~", "`", "{", "}", "[", "]"];

// Links password field to HTML  
var passwordField = document.getElementById("password");

//Links button action to HTML  
var generateBtn = document.querySelector("#generate");

//We'll have a master array and then we'll add arrays to the master array 
var masterArray = []

//We'll use a random generator to pull chracters from masterArray 
function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];

  return randomElement;
}

// Write password to the #password input
function writePassword() {
  // We'll use window.confirm() / window.prompt() to collect the infromation from the user 
  var passwordLengthConfirm = window.prompt("How long do you want your password to be?")
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

    // We'll use an if statement to check if user has selected min. 1 array
    // We're going to use a for loop that will create the password with the requested length if condition met
    if (masterArray.length > 0) {
      for (var i = 0; i < passwordLengthConfirm; i++) {
        var newLetter = getRandom(masterArray);

        //Append newLetter into passwordGen
        passwordGen = passwordGen + newLetter;
      }
    } else {
      window.alert("You need to choose chracters for your password. Try again!")
    }

    // Append passwordGen into the passwordField 
    passwordField.append(passwordGen);
  } else {
    window.alert("You need to provide a # between 8 and 128. Please try again!");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  writePassword();
  masterArray = [];
  // newLetter = []; <----how can we reset the password field everytime we click on the button??? 
})