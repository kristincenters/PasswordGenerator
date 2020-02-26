//activate button
var generateBtn = document.querySelector("#generate");

// variables
var upperCaseLtrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLtrs = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!()@[]_`{|}~%*@";
var numerals = "0123456789";

//password variables
var pLength = parseInt(pLength)
var allCriteriaArray = [];
var randomPassword = document.getElementById(randomPassword);
var password = "";

//on click button starts user questions and performs if statements to build the array of all characters, I want to use ParseInt to pass the user input value for password length
function generatePassword() {
    //user input variables
var pLength = prompt("Enter a number of characters for your password between 8 nd 128"); 
(pLength >= 8 && pLength <=128)
console.log(pLength)
var upperCaseInput = confirm("Include uppercase letters?");
var lowerCaseInput = confirm("Include lowercase letters?");
var specCharInput = confirm("Include special characters?");
var numericInput = confirm("Include numbers?");
}
//input validated by true method
    if (upperCaseInput === true) {
        upperCaseInput = upperCaseLtrs
        for (i = 0; i < upperCaseInput.length; i++) {
        allCriteriaArray.push(upperCaseInput[i]); 
        }
    }
    if (lowerCaseInput === true) {
        lowerCaseInput = lowerCaseLtrs
        for (i = 0; i < upperCaseInput.length; i++) {
        allCriteriaArray.push(lowerCaseInput[i]); 
        }
    }
    if (specCharInput === true) {
        specCharInput = specialChars
        for (i = 0; i < specCharInput.length; i++) {
        allCriteriaArray.push(specCharInput[i]); 
        }
    }
    if (numericInput === true) {
        numericInput = numerals
        for (i = 0; i < numerals.length; i++) {
        allCriteriaArray.push(numerals[i]); 
        }
    }
console.log(allCriteriaArray)    
 //alert user if at least one criteria is not met
    if (upperCaseInput === false && lowerCaseInput === false && specCharInput === false && NumericInput === false) {
        alert("You must choose at least one criteria, please try again.")
    }

//Choose random letters from the array containing all of the variables, the for loop was suggested by classmates but I don't know why. It doesn't make sense to me. 
function randomizer() {
    for (i = 0; i <= pLength.length; i++) {
        randomPassword += allCriteriaArray.charAt(Math.floor(Math.random() * allCriteriaArray.length));
        var password = randomPassword.concat(randomPassword)
        document.getElementById(randomPassword).value = randomPassword;
        console.log(randomPassword)
        document.write(randomPassword)
    }
}
//using while to randomize makes more sense to me but doesn't work either
while (password.length < pLength) {
  var randomPassword = randomPassword[Math.floor(Math.random() * allCriteriaArray.length)];

//write the random password to the html page
function writePassword() {
    var password = generatePassword()
    var passwordText = document.querySelector("#password");
    passwordText.value = randomPassword;
    return randomPassword;
}
//write the password to the page
generateBtn.addEventListener("click", writePassword);

