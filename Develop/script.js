// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Strings of characters users can include in password.
var charCaseLower = "abcdefghijklmnopqrstuvwxyz";
var charCaseUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumbers = "0123456789";
var CharSpecial = "!@#$%^&*()-_=+[]{};<>";

