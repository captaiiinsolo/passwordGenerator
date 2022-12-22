// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function pleaseTryAgain() {
  var tryAgain = alert("Password must be between 8 and 128 characters long. Please try again.");
}

function caseSelections() {
  var characterCaseLower = confirm("Would you like to include lowercase letters?");
  var characterCaseUpper = confirm("Would you like to include uppercase letters included?");
  var characterSpecial = confirm("Would you like to include special characters?");
  var characterNumbers = confirm("Would you like to include numbers?");
    if (characterCaseLower !== true) {
      return characterCaseUpper;
    }
    else if (characterCaseLower === true) {
      characterCaseUpper;
    }

    else if (characterCaseUpper !== true) {
      return characterSpecial;
    }

    else if (characterSpecial === true) {
      characterNumbers;
    }
}


// Generate new password
function generatePassword() {
  var countLow = 8;
  var countHigh = 128;
  var charAvailableAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var charAvailableNum = "0123456789"
  var charAvailableSpecial = "!@#$%^&*(-_<>,."
  var characterCountPrompt = prompt("How many characters would you like your password to contain?", "8-128");
    if (characterCountPrompt < countLow || characterCountPrompt > countHigh) {
      pleaseTryAgain();
    }

    else if (characterCountPrompt >= countLow || characterCountPrompt <= countHigh) {
      caseSelections();
    }
   
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

