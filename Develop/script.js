// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  function generatePassword() {
    // Prompt user for new password length
    var passLength = prompt("How many characters would you like your new password to be?", "8-128");

    // Confirm if user wants to include lowercase characters
    var caseLower = confirm("Would you like to include lowercase characters?");

    // Confirm if user wants to include uppercase characters
    var caseUpper = confirm("Would you like to include UPPERCASE characters?");

    // Confirm if user wants to include numbers
    var caseNumb = confirm("Would you like to include numbers?");

    // Confirm if user wants to include specia characters
    var caseSpec = confirm("Would you like to include special characters?");

    // Prompt values are returned as strings so we need to use parseInt to convert to intergers in order to be compared for correct count
    var passwordLength = parseInt(passLength);

    var usersNewPass = "";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbs = "0123456789";
    var special = "!@#$%^&*()_-";


    // If the input is less than 8 or greater than 128 characters the user will be alerted that new password cannot be generated.
    if (passwordLength < 8 || passwordLength > 128) {
      return alert("Password must be between 8 and 128 characters long. Please try again.");
    }

    // variables will concatenate only if the confirms comeback as true
    if (caseLower === true) {
      usersNewPass += lowercase
    };

    if (caseUpper === true) {
      usersNewPass += uppercase
    };

    if (caseNumb === true) {
      usersNewPass += numbs
    };

    if (caseSpec === true) {
      usersNewPass += special
    };

    // If no case selections are made user will be alerted to try again
    if (caseLower === false && caseUpper === false && caseNumb === false && caseSpec == false) {
      return alert("Password must contain at least one character set. Please try again.");
    }

    // Creates randonly generated password using concatenated strings of the confirmed case selections
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      password += usersNewPass.charAt(Math.floor(Math.random() * usersNewPass.length));
    }
    console.log(password)
    return password;
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}









